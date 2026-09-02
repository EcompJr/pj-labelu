
const link = (path: string) => {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(path)) return path

    const base = import.meta.env.BASE_URL || "/"
    const normalizedBase = base.endsWith("/") ? base : `${base}/`
    const normalizedPath = path.replace(/^\/+/, "")

    return new URL(normalizedPath, `http://localhost${normalizedBase}`)
}

export { link }
