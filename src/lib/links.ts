
const link = (path: string) => {

    return new URL(path, import.meta.env.BASE_URL).href
}

export { link }
