/**
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
**/

async function main() {
    const LIMIT = 4000000;
    const seq = [1, 2];

    while (seq.slice(-1)[0] <= LIMIT) {
        seq.push(seq.slice(-1)[0] + seq.slice(-2)[0]);
    }

    console.log(seq.filter(e => e % 2 === 0).reduce((sum, e) => sum + e));
}

main().catch(() => process.exit(1));

