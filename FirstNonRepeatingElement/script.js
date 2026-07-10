// First, I create an object to count the frequency of each element. Then, I traverse the original array again because the question asks for the first non-repeating element. While traversing the array, I check if the frequency of the current element is 1. The first element with a frequency of 1 is the answer.

function firstNonRepeating(arr) {
    // Write your code here

    let count = {};

    for(let i = 0 ; i<arr.length; i++){

        // if(count[arr[i]]===1){

        //     return arr[i]
        if(count[arr[i]]){
            count[arr[i]]++
        }
        else{
            count[arr[i]] = 1
        }
    }
        
     for(let i = 0 ; i<arr.length; i++){

        if(count[arr[i]]===1){

            return arr[i]
           
     }
    }

}

console.log(firstNonRepeating([4, 5, 1, 2, 0, 4, 1, 0])); // 5

