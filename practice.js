const word = ["Mango", "Apple", "Pineaple", "Yellow"];
const sliceWord = word.slice([0], [2]);
const sentence = "We have a one rupee note";
let pattern = /rup/i;
let tryMathc = sentence.match(pattern);
const newSplit = sentence.split(" ");
const countSplitedWord = newSplit.filter(itemCount => itemCount.length !== 0).length;

let filterWords = ["Destruction", "Physical", "Hello", "so", "py", "to"];

let newFilter = filterWords.filter((item) => {
    return item.length < 5;
});

let shortFilter = filterWords.filter(element => element.length < 6)
console.log(newFilter);
console.log(shortFilter)
console.log(newSplit);
console.log(sliceWord);
console.log(countSplitedWord);
console.log(tryMathc)