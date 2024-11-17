
//Task 1 "calculate sum and average"
function calculateSumandAvg(number) {
    let sum = 0;
    let avg = 0;
    let i = 0;

    while (i < number.length) {
        sum += number[i];
        i++;
    }

   
    avg = sum / number.length;

    return { sum, avg };
}

const number = [10, 20, 30, 40, 50];
const result = calculateSumandAvg(number);
console.log(result); 

//Task 2 "remove dublicant word"
function removeDublicateWord(words){
return [...new Set(words)];
}

const fruit=["apple","strawberry","apple","bannana","bannana","strawberry","orange"];
console.log(removeDublicateWord(fruit));

