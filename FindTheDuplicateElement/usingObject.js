function findDuplicates(arr) {

    let count = {};
    let result = [];

    // Count frequency
    for (let i = 0; i < arr.length; i++) {

        if (count[arr[i]]) {
            count[arr[i]]++;
        } else {
            count[arr[i]] = 1;
        }

    }

    // Find duplicates
    for (let key in count) {

        if (count[key] > 1) {
            result.push(Number(key));
        }

    }

    return result;
}

console.log(findDuplicates([1,2,3,2,4,5,1]));



// Find duplicates:

// [1, 2, 3, 2, 4, 5, 1]

// Expected Output

// [1, 2]
// Step 1: Create an Empty Object
// let count = {};

// Initially:

// count = {}

// Nothing is stored.

// Step 2: Traverse the Array
// for (let i = 0; i < arr.length; i++) {

// }

// arr = [1,2,3,2,4,5,1]

// Iteration 1

// i = 0

// arr[i] = 1

// Has 1 already been stored in the object?

// That's why we write:

// if (count[arr[i]]) {

// }
// Suppose

// count = {}

// and

// arr[i] = 1

// What do you think this returns?

// count[arr[i]]

// Does it return: undefined

// Step 1

// Initially:

// let count = {};

// The object is empty.

// count = {}

// There is no key inside it.

// Suppose:

// arr[i] = 1;

// Now JavaScript checks:

// count[arr[i]]

// which becomes:

// count[1]

// It asks:

// "Is there a key 1 in the object?"

// Current object:

// {}

// There is no key 1.

// So JavaScript returns:

// undefined


// if (count[arr[i]]) {
//     // Block A
// } else {
//     // Block B
// } b block execute

// count[5] = 1 
// so 5 is array element 1 is key value