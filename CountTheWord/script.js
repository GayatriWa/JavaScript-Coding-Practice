
// count the word in string
// First, I'll check if the string is empty. Then I'll initialize a variable count to 1 because a sentence with words has one more word than the number of spaces. I'll traverse the string using a loop, and whenever I find a space, I'll increment the count. Finally, I'll return the count.


let space = 0
function countWords(str) {
    // Write your code here
    for(let i = 0 ; i<str.length;i++){
        if(str[i]===" ") space++;
    }
    return space +1;
}

console.log(countWords("I am Gayatri")); // 3



