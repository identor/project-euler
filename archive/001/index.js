/**
 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
**/

const l = 1000 - 1
    ,t1 = 3
    ,t2 = 5

const f = (x, l) => ((x + parseInt(l / x) * x ) * parseInt(l / x)) / 2

console.log(f(t1, l) + f(t2, l) - f(t1 * t2, l))

