/**
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
**/

function isPrime(n) {
    return factors(n).length === 2;
}

function primeFactors(n) {
    const result = [];
    for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
        if (n % i === 0 && isPrime(i)) result.push(i);
    }

    return result;
}

function factors(n) {
    const result = [1, n];
    for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
        if (n % i === 0) result.push(i);
    }

    return result;
}

async function main() {
    console.log(primeFactors(13195));
    console.log(primeFactors(600851475143));
}

main().catch(err => {
    console.error(err);
    process.exit(1)
});

