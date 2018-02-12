/**
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

const f = (i, j, n) => {
  return i < n && j < n
    ? [[i, j], f(i+1, j, n), f(i, j+1, n)]
    : i < n
    ? [[i, j], f(i+1, j, n)]
    : j < n
    ? [[i, j], f(i, j+1, n)]
    : [[i, j]]
}


const result = f(0, 0, 2)

const toArr = paths => {
  const flat = arr => {
    if (arr.length > 1) {
      let from = arr.splice(0, 1)
      from = from[0].length ? from : [from]

      return arr
        .forEach(arr => {
          arr = arr[0].length ? arr.concat(from) : [from, arr[0]]

          return arr
        })
        .map(flat)
    } else {
      return arr
    }
  }

  console.log(JSON.stringify(flat(paths)))
}

toArr(result)
// console.log(JSON.stringify(toArr(result), null, '  '))

