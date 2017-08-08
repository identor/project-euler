/**
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
**/

const assert = require('assert')
  ,pRange = n => [...Array(parseInt(Math.sqrt(n))).keys()]
    .slice(1)
    .map(e => e + 1)
  ,fFilter = n => e => n % e === 0
  ,prime = n => pFactors(n).filter(fFilter(n)).length < 3
  ,pFactors = n => pRange(n)
    .concat([1, n])

const f = n => {
  const r = []

  for (let c = 2; r.length < n; c++) if (prime(c)) r.push(c)

  return r.pop()
}

assert.equal(13, f(6))
console.log(f(10001))
