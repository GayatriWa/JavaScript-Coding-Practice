// First, I initialize two variables: largest and secondLargest. Then I traverse the array once. If the current element is greater than largest, I update secondLargest with the previous value of largest and assign the current element to largest. Otherwise, if the current element is greater than secondLargest but smaller than largest, I update secondLargest. Finally, I return secondLargest.


function findSecondLargest(arr) {
    // Your code here
    let largest = -Infinity;
    let secondLargest = -Infinity

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest = largest
            largest = arr[i]
            
        }
        else if(arr[i] > secondLargest && arr[i]< largest){
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

console.log(findSecondLargest([10, 25, 7, 40, 18])); // 25

// Why didn't you use sort()?

// Using sort() takes O(n log n) time, whereas this approach finds the second largest element in a single traversal with O(n) time and O(1) extra space, making it more efficient.