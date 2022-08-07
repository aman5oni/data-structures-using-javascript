const Stack = [];
const Max = 5;

const PrintStack = () => {
  console.log(Stack);
};

const PushStack = (value) => {
  if (Stack.length < Max) {
    Stack.push(value);
    console.log(`${value} is pushed into stack`);
  }else{
    console.log(`Size Exceed`)
  }
};

const PopStack = () => {
  console.log(`Item Popped ${Stack.pop()}`);
};

const TopElement = () => {
  console.log(`Top Element ${Stack[Stack.length - 1]}`);
};

const Length = () => {
  console.log(`Length Is ${Stack.length}`);
};

PushStack("hello");
PushStack(1);
PushStack(2)
PushStack(3)
PushStack(4)
TopElement();
Length();

PrintStack();
