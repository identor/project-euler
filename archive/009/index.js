/**
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2

For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
**/

const assert = require('assert')
  ,mul = (a, b) => a * b
  ,add = (a, b) => a + b
  ,prod = arr => arr.reduce(mul, 1)
  ,sum = arr => arr.reduce(add, 0)
  ,f = n => {
    const arr = []

    for (let a = 1; a < n; a++) {
      for (let b = 2; b < n; b++) {
        for (let c = 3; (a + b + c) <= n; c++) {
          if ((a < b && b < c) && (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2))) {
            arr.push([a, b, c])
          }
        }
      }
    }

    return arr.sort((a, b) => Math.max(sum(a) - sum(b)))
  }

const sample = 

assert.equal(
  prod(f(12).find(e => Math.pow(e[0], 2) + Math.pow(e[1], 2) === 25))
  ,3*4*5
)

console.log(prod(f(1000).find(e => sum(e) === 1000)))

