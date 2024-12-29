// const a = [12,4,22,32,2,77]
// const sortedVal = a.sort()
// console.log(sortedVal)


let arr = [1, 13, 36, 2, 8, 17];

let sortArr = arr.sort((a, b) => {
    console.log(`${a}a`, `${b}b`)
    console.log(a- b)

    return a - b;
});

console.log(sortArr); // Output: [1, 2, 8, 13, 17, 36]



// How sort Works:

// The sort method compares two values at a time (a and b) using the comparison function (a, b) => a - b.

// The result of a - b determines the order:

// If the result is negative (e.g., a - b < 0), a is placed before b.
// If the result is zero (a - b === 0), the order remains unchanged.
// If the result is positive (a - b > 0), b is placed before a.
// Without a comparison function, sort converts elements to strings and sorts them lexicographically.



