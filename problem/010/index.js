/**
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
**/
let
  d = 0

const assert = require('assert')
  ,pRange = n => [...Array(n).keys()].slice(2)
  ,fFilter = n => e => n % e === 0
  ,pCache = []
  ,prime = n => {
    if ((c = Math.round(n / 2000000)) && c === d)
      console.log(d)
    if (pCache.indexOf(n) > -1) return n
    if (pCache.every(e => n % e !== 0)) {
      return pCache.push(n)
    }
  }
  ,add = (a, b) => a + b
  ,sum = arr => arr.reduce(add, 0)

const f = n => {
  return sum(pRange(n).filter(prime))
}

assert.equal(f(10), 17)
console.log(f(2000000))
