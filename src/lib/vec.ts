
const sortBy = <T>(array: T[], key: keyof T): T[] => {
  return [...array].sort((a, b) => {
    const valA = a[key]
    const valB = b[key]

    if (valA < valB) return -1
    if (valA > valB) return 1
    return 0
  })
}

const reverse = <T>(array: T[]): T[] => {
  return [...array].reverse()
}

export {
  sortBy,
  reverse,
}