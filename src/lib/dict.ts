

const groupBy = <T, K extends keyof T>(array: T[], key: (item: T) => string): Record<string, T[]> => {
  return array.reduce((result, item) => {
    const groupKey = key(item)
    if (!result[groupKey]) {
      result[groupKey] = []
    }
    result[groupKey].push(item)
    return result
  }, {} as Record<string, T[]>)
}

const groupByKey = <T, K extends keyof T>(array: T[], key: K): Record<string, T[]> => {
  return groupBy(array, item => String(item[key]))
}

export {
  groupBy,
  groupByKey,
}