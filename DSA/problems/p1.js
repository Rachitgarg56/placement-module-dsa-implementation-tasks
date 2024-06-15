// Identify and eliminate duplicate words from the given string, then display the modified string. "big black bug bit a big black dog on his big black nose" 
// The objective is to find and remove any repeated words within the string, resulting in a modified string that displays each word only once.

const eliminateDuplicateWords = (str) => {
    const arr = str.split(' ');
    const resArr = [];
    const set = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (!set.has(arr[i])) {
            set.add(arr[i]);
            resArr.push(arr[i]);
        } 
    }
    return resArr.join(' ');
}


const str = "big black bug bit a big black dog on his big black nose";
const newStr = eliminateDuplicateWords(str);
console.log(newStr);

