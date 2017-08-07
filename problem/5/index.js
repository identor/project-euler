/**
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
**/

const assert = require('assert')

// probable factors
const pRange = n => [...Array(parseInt(Math.sqrt(n))).keys()]
    .slice(1)
    .map(e => e + 1)
  ,pFactors = n => pRange(n)
    .concat([1, n])
  ,factors = n => {
      const result = []

      while (!prime(n)) {
        const l = lpf(n)
        result.push(l)
        n = n / l
      }

      result.push(n)

      return result
    }
  ,fFilter = n => e => n % e === 0
  ,prime = n => pFactors(n).filter(fFilter(n)).length < 3
  // Least prime factor
  ,lpf = n => pRange(n).filter(prime).filter(fFilter(n)).sort()[0]
  ,f = r => [...Array(r).keys()].map(e => e+1)
    .reduce((res, e) => {
      const nFactors = factors(e)
        .reduce((map, f) => {
          map[f] = map[f] || 0
          map[f]++

          return map
        }, {})

      for (const k in nFactors) {
        res[k] = Math.max(res[k] || 1, nFactors[k])
      }

      return res
    }, [])
    .reduce((prod, power, n) => prod * Math.pow(n || 0, power), 1)

assert.equal(f(10), 2520)
console.log(f(20))


