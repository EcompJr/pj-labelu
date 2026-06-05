const CACHE_NAME = "labelu-site-v3"

const ASSETS = [
  "/pj-labelu/site.webmanifest",
  "/pj-labelu/android-chrome-192x192.png",
  "/pj-labelu/android-chrome-512x512.png"
]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  )

  self.skipWaiting()
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName.startsWith("labelu-site-"))
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName))
        )
      )
      .then(() => self.clients.claim())
  )
})

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return

  const url = new URL(event.request.url)

  if (!url.pathname.startsWith("/pj-labelu/")) return
  if (url.pathname.startsWith("/pj-labelu/admin/")) return

  const acceptsHtml = event.request.headers.get("accept")?.includes("text/html")

  if (event.request.mode === "navigate" || acceptsHtml) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    )

    return
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached

      return fetch(event.request).then((response) => {
        if (response.ok) {
          const responseToCache = response.clone()

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })
        }

        return response
      })
    })
  )
})
