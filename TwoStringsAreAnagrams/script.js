// Two strings are anagrams if they contain the same characters with the same frequency.

// Example 1
// Input:
// str1 = "listen"
// str2 = "silent"

// Output:
// true
// Example 2
// Input:
// str1 = "hello"
// str2 = "world"

// Output:
// false
// First, I check whether both strings have the same length. If the lengths are different, they cannot be anagrams, so I return false. Then I create a frequency object and count the characters of the first string. Next, I traverse the second string and decrease the frequency of each character. If any character is missing or its frequency becomes negative, I return false. If all frequencies become zero, the strings are anagrams, so I return true.

function isAnagram(str1, str2) {
    // Your code here
    if(str1.length !== str2.length){
        return false
    }

    let count = {};
    for(let i = 0; i<str1.length;i++){
        if(count[str1[i]]){
            count[str1[i]]++
        }else{
            count[str1[i]]=1
        }
    }
    for(let i=0;i<str2.length;i++){
        if (!count[str2[i]]) {
            return false;
        }

            count[str2[i]]--;
    }
    return true
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false