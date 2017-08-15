/**
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
**/

const assert = require('assert')

const f1 = r => [...Array(r).keys()]
    .map(e => e+1)
    .reduce((sum, e) => sum + Math.pow(e, 2), 0)
  ,f2 = r => Math.pow(
      [...Array(r).keys()]
        .map(e => e+1)
        .reduce((sum, e) => sum + e, 0)
    ,2)
  ,f = r => f2(r) - f1(r)

assert.equal(f(10), 2640)
console.log(f(100))


