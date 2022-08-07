// Stack Using Linked List

class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
}
}

class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    Push = (data) => {
    const newData = new StackNode(data);
    
    if (this.head == null) {
        this.head = newData;
        newData.next = null;
        console.log(`${data} Pushed In Stack You Are The First`);
    } else {
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
      current.next = newData;
      newData.next = null;
      console.log(`${data} Pushed In Stack`);
    }
};

Pop = () => {
    if (this.head == null) {
      console.log(`Stack Is Empty`);
    } else {
        let current = this.head;
      while (current.next.next != null) {
        current = current.next;
    }
    current.next = null;
    console.log("Popped");
    }
};

PrintStack = () => {
    if (this.head == null) {
        console.log(`Stack Is Empty`);
    } else {
        let Data = "";
        let current = this.head;
        while (current != null) {
            Data += ` ${current.data}`;
            current = current.next;
      }
      console.log(Data);
    }
};
}

const objForStack = new Stack();

objForStack.Push(23);
objForStack.Push(34);
objForStack.Push(32);
objForStack.Pop();
objForStack.Push(3);
objForStack.Pop();
objForStack.PrintStack();



// Queue Using Linked List
class QueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  Enqueue = (data) => {
    const newData = new QueueNode(data);

    if (this.head == null) {
      this.head = newData;
      newData.next = null;
      console.log(`${data} Pushed In Queue You Are The First`);
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newData;
      newData.next = null;
      console.log(`${data} Pushed In Queue`);
    }
  };

  Dequeue = () => {
    if (this.head == null) {
      console.log(`Queue Is Empty`);
    } else {
      this.head = this.head.next;
      console.log("Removed");
    }
  };

  PrintQueue = () => {
    if (this.head == null) {
      console.log(`Queue Is Empty`);
    } else {
      let Data = "";
      let current = this.head;
      while (current != null) {
        Data += ` ${current.data}`;
        current = current.next;
      }
      console.log(Data);
    }
  };
}


const objForQueue = new Queue()
objForQueue.Enqueue(23)
objForQueue.Enqueue(27)
objForQueue.Enqueue(32)
objForQueue.Dequeue()
objForQueue.PrintQueue()