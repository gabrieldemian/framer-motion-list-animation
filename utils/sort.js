const sort = (arr, sortBy) => arr.sort((a, b) => {
  const itemA = a[sortBy].toLowerCase()
  const itemB = b[sortBy].toLowerCase()

  if (itemA < itemB) {
    return -1
  }
  if (itemA > itemB) {
    return 1
  }
  return 0
})

export default sort