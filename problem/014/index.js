/**
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

class Collatz {
  constructor() {
    this.max = { val: 1, len: 1 }

    this.curr = 2
  }

  nextCollatz() {
    const values = Collatz.values(this.curr)

    if (values.length > this.max.len) {
      this.max = { val: this.curr, len: values.length }
    }

    this.curr++
  }

  static nextVal(n) {
    return n % 2 === 0 ? n/2 : n*3 + 1
  }

  static values(n) {
    const result = [n]
    while ((n = Collatz.nextVal(n)) !== 1) {
      result.push(n)
    }

    result.push(1)

    return result
  }
}

const prog = new Collatz()
while (prog.curr < 1000000) {
  prog.nextCollatz()
}

console.log(prog.max.val)

