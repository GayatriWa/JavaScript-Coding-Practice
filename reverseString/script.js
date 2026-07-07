// Write a JavaScript function to reverse a string without using the built-in reverse() method.

// First, I'll create an empty string to store the reversed result. Then I'll use a loop starting from the last character of the string and move toward the first character. In each iteration, I'll append the current character to the result string. Finally, I'll return the reversed string.


function reverseString(str) {
    // Write your code here
    let reverse = ""
    for(let i=str.length-1;i>=0;i--){
        reverse += str[i]
    }
    return reverse;
}

console.log(reverseString("Gayatri"));


