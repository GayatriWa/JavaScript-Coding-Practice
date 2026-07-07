// find largest element in an array 
// First, I initialize a variable largest with the first element of the array (arr[0]). Then I traverse the array using a loop. For each element, I compare it with largest. If the current element is greater than largest, I update largest. After the loop finishes, I return largest.


function findLargest(arr) {
    // Write your code here
    let largest = arr[0]
    for(let i = 0; i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
        
    }
    return largest;
}

console.log(findLargest([10, 25, 7, 40, 18])); // 40