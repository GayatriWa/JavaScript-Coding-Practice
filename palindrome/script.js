// Check whether a string is a palindrome.

// First, I'll create an empty string to store the reversed string. Then I'll use a loop to traverse the original string from the last character to the first and build the reversed string. Finally, I'll compare the original string with the reversed string. If both are equal, the string is a palindrome; otherwise, it is not.

function isPalindrome(str) {
    // Write your code here

    let reverse = "";

    for(let i= str.length-1;i>=0;i--){
        reverse += str[i];
    }
    return str === reverse
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false