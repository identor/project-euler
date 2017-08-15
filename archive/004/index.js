/**
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
**/

function generatePalindromicCombination(n) {
    const palindromes = [];
    for (let i = Math.pow(10,n) - 1; i >= Math.pow(10,n-1); i--) {
        for (let j = Math.pow(10,n) - 1; j >= Math.pow(10,n-1); j--) {
            const prod = i*j;
            if (String(prod) === String(prod).split('').reverse().join('')) palindromes.push(prod);
        }
    }

    return palindromes;
}

console.log(Math.max.apply(null, generatePalindromicCombination(3)));

