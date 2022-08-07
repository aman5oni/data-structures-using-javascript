let X = ["A", "B", "C", "D"];
let Y = ["E", "F", "G", "H"];

console.log(X);
console.log(Y);

let JOIN = X.concat(Y);
console.log(JOIN);

let CONSTRUCTOR = X.constructor;
console.log(CONSTRUCTOR);

let ENTRIES = X.entries();
console.log(ENTRIES);

for (let value of ENTRIES) {
  console.log(value);
}

let STR = X.every((str) => {
  if ((str = "B")) {
    return str;
  }
});
//Gives Boolean Value
console.log(STR);

let C = ["A", "B", "C", "D"];

C.fill("D");
console.log(C);
C.fill("A", 0, 1);
console.log(C);

let age = [12, 12, 23, 54, 14, 13, 78, 23];

let result = age.filter((num) => {
  return num >= 18;
});
let findd = age.filter((num) => {
  if (num == 12) {
    return num;
  }
});

console.log(result);
console.log(findd);

let myF = age.find((num) => {
  if (num == 12) {
    return num;
  }
});

console.log(myF);

let myFI = age.findIndex((num) => {
  if (num == 12) {
    return num;
  }
});

console.log(myFI);

let text = " ";

let ForEach = age.forEach((num, key) => {
  text += `${key}${num} `;
});

console.log(text);

let STRI = Array.from("AMAN");

console.log(STRI);

let fruits = ["apple", "banana", "orange"];

let check = fruits.includes("orange", 2);

console.log(check);

let indexx = fruits.indexOf("orange");

console.log(indexx);

let obj = {1:"h"}
let checkArray = Array.isArray(obj)

console.log(checkArray)

let fruitStr = fruits.join(" A ")

console.log(fruitStr)

let fruitArr = fruitStr.split(" A ")

console.log(fruitArr)

let keys = fruits.keys()

let txt = ""

for (let x of keys){
    txt += x +" "
}

console.log(txt)

let LIO = fruits.lastIndexOf("apple")

console.log(LIO)

let len = fruits.length

console.log(len)

let mapF = fruits.map((value,key)=>{
    return `The Fruit name Is ${value} and Index is ${key}`
})

console.log(mapF)

let NumArr = [12,13,14,15,16,17]

NumArr.pop()
NumArr.pop()
NumArr.push(18)

console.log(NumArr)

Array.prototype.upperCase = function(){
    for(let i = 0;i<this.length;i++){
        this[i] = this[i].toUpperCase()
    }
}

const STRRR = ["abcde","fghij","klmno","pqrst"]

STRRR.upperCase()

console.log(STRRR)

let NewNumArr = [120,13,14,15,16]

let ReduceNumberArray = NewNumArr.reduce((total,num)=>{
    return total - num
})

console.log(ReduceNumberArray)


let ReduceRightArray = NewNumArr.reduceRight((total,num)=>{
    return total - num
})

console.log(ReduceRightArray)

let ReverseArray = NewNumArr.reverse()

console.log(ReverseArray)

NewNumArr.shift()
console.log(NewNumArr)

let ArrNew = [1,2,3,4,5,6,7,8,9,10]

console.log(ArrNew)

let Slices = ArrNew.slice(0,3)
//Support Negative Values

console.log(Slices)

let SOME = ArrNew.some((value)=>{
    return value > 10
})

console.log(SOME)

let LETTERS = ["B","D","E","C","A"]
let WORDS = [5,4,6,2,3,1]

let sort1 = LETTERS.sort()
let sort2 = WORDS.sort()

console.log(sort1)
console.log(sort2)

ArrNew.splice(1,4)
console.log(ArrNew)

let NewString = ArrNew.toString()

console.log(NewString)

ArrNew.unshift(0)
console.log(ArrNew)

let newArrNew = ArrNew.valueOf()

console.log(newArrNew)