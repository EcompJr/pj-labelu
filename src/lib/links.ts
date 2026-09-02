
const link = (path: string) => 
    new URL(path, import.meta.env.BASE_URL).pathname

export { link }
