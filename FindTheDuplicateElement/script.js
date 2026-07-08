// First, create an empty array called result. Then use two loops. The outer loop picks one element at a time. The inner loop compares that element with all the remaining elements. If a matching element is found, it means the current element is a duplicate. Before pushing it into the result, check that it hasn't already been added, so each duplicate appears only once.

function findDuplicates(arr) {
    // Your code here
    let result = [];
    let found = false;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i]===arr[j]){
                    let found = false;

                for(let k=0; k<result.length;k++){
                    if(result[k]===arr[i] ){
                        found = true;
                        break;
            }

        }
        if(!found){
            result.push(arr[i]) 

            }
        }
                
        }
    }
    return result;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1])); // [2, 1]




