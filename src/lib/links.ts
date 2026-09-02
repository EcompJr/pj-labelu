
const isExternal = (path: string) =>
    path.startsWith("http://") 
        || path.startsWith("https://") 
        || path.startsWith("mailto:") 
        || path.startsWith("tel:")

const isRelative = (path: string) =>
    path.startsWith("./") 
        || path.startsWith("../") 

const link = (path: string) => {
    if (isExternal(path) || isRelative(path)) {
        return path
    } else {
        const base = import.meta.env.BASE_URL.replace(/\/$/, "")
        const clean = path.replace(/^\//, "")
    
        return `${base}/${clean}`
    }
}

export { link }
