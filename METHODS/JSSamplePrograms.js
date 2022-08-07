// let A = "Hello"
// console.log(A);

// let A = 4
// let B = 3
// let C = A + B
// console.log(C)

// let Num = 4
// let Solution = Math.sqrt(Num)
// console.log(Solution)

// let base = 4
// height = 8
// let area = (base * height)/2
// console.log(area)

// let A = 4
// let B = 3
// let temp

// temp = A
// A = B
// B = temp

// console.log(A)
// console.log(B)

// let A=4
// let B=4
// let C=6

// let root1 = (-B + Math.sqrt(B^2 - 4*A*C))/2*A
// let root2 = (-B - Math.sqrt(B^2 - 4*A*C))/2*A

// console.log(root1)
// console.log(root2)

// let KM = 40
// let MILES = KM * 0.621371
// console.log(MILES)

const a2 = () => {
  console.log("Hello 2");
};


const asyncf = async () => {
  await new Promise((resolve) => setTimeout(()=>{
    console.log("Hello 1")
    resolve();
  },2000));
  a2();
};

asyncf()