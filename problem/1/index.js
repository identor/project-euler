/**
 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
**/

async function main() {
    /*
    const sumFunc = (sum, e) => sum + e;
    const arr = [...Array(1000).keys()];
    const set1 = arr.filter(e => e%3 === 0);
    const set2 = arr.filter(e => e%5 === 0);

    console.log(set1.reduce(sumFunc) + set2.reduce(sumFunc));
    */

   let result = 0;
   for (let i = 0; i < 1000; i++) {
       result += (i % 3 === 0 || i % 5 === 0) ? i : 0;
   }

   console.log(result);
}

main().catch(() => process.exit(1));

