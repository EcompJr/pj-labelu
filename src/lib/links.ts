
const link = (path: string) => {
    const base = import.meta.env.BASE_URL.replace(/\/$/, "")
    const clean = path.replace(/^\//, "")

    return `${base}/${clean}`
}

export { link }
