// 3. Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function reverseString(string) {
    if (string === '') {
        return '';
    }
    return reverseString(string.slice(1)) + string[0]
}

console.log(reverseString('cat'))
console.log(reverseString('Hello World!'))