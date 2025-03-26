let nums = [3, 7, 34, 90, 12];
let mix = [true, "green", "where", 12, 56];
console.log(nums.pop(), mix.pop());
console.log(nums);

let pets = ["Cow", "Bird", "Snake", "Dog"];
let petStr = pets.join(" ");  
console.log(petStr);

let numList = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
numList.sort((a, b) => a - b);
console.log(numList);

let terms = ["boy", "man", "girl", "school", "girl", "woman"];
let singleTerms = terms.filter((item, idx) => terms.indexOf(item) === idx);
let repeatTerms = terms.filter((item, idx) => terms.indexOf(item) !== idx);
console.log(singleTerms); 
console.log(repeatTerms);

let set5 = ["the", "way", "x", 4];
let target = "food";
let outcome = set5.includes(target) ? target : "the search word was not found";
console.log(outcome);

let text = "renniw";
let orderedText = text.split('').reduce((acc, ch) => {
    let pos = 0;
    while (pos < acc.length && ch > acc[pos]) {
        pos++;
    }
    acc.splice(pos, 0, ch); 
    return acc;
}, []).join(''); 
console.log(orderedText);

let fruitSet = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grape", "Kiwi", "Peach", "Pear", "Cherry"];
fruitSet.splice(4, 0, "Tomato");  
console.log(fruitSet);