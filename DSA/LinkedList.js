// Circular Linked List
// Circular Doubly Linked List



class SinglyNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  InsertAtBeginning = (data) => {
    const newNode = new SinglyNode(data);

    newNode.next = this.head;
    this.head = newNode;
    this.size += 1;
    console.log(`${data} Inserted`);
  };

  InsertAtEnd = (data) => {
    const newNode = new SinglyNode(data);

    if (this.head == null) {
      this.head = newNode;
      this.size += 1;
      console.log(`${data} Inserted`);
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }

      current.next = newNode;
      this.size += 1;
      console.log(`${data} Inserted`);
    }
  };

  DeleteAtBeginning = () => {
    if (this.head == null) {
      console.log("List Is Already Empty");
    } else {
      this.head = this.head.next;
      this.size -= 1;
    }
  };

  DeleteAtEnd = () => {
    if (this.head == null) {
      console.log("List Is Already Empty");
    } else {
      let current = this.head;
      while (current.next.next != null) {
        current = current.next;
      }
      current.next = null;
      this.size -= 1;
    }
  };

  InsertAtIndex = (number, index) => {
    const newNode = new SinglyNode(number);
    if (this.head == null) {
      console.log("List is Empty");
    } else {
      if (index < 0) {
        console.log(`Please Enter A Positive Index`);
      } else {
        if (index > this.size) {
          console.log(`Index Not Found Maybe You Give A Wrong Index`);
        } else {
          let count = 1;
          let current = this.head;
          let previous = this.head;
          while (count != index) {
            current = current.next;
            previous = current;
            count++;
          }
          current = current.next;
          previous.next = newNode;
          newNode.next = current;
          this.size++;
        }
      }
    }
  };

  InsertAfter = (value, prevValue) => {
    const newNode = new SinglyNode(value);
    if (this.head == null) {
      console.log("List Is Empty")
    }
    let current = this.head;
    let previous = this.head;
    while (current.next != null) {
      if (current.data == prevValue) {
        current = current.next;
        previous.next = newNode;
        newNode.next = current;
        this.size++;
        console.log(`${value} Inserted`);
        break;
      }
      current = current.next;
      previous = current;
    }
  };

  PrintLinkedList = () => {
    if (this.head == null) {
      console.log("Linked List Is Empty");
    } else {
      let Data = "";
      while (this.head != null) {
        Data += ` ${this.head.data}`;
        this.head = this.head.next;
      }
      console.log(Data);
    }
  };
}

const Obj1 = new LinkedList();

Obj1.InsertAtBeginning(5);
Obj1.InsertAtBeginning(4);
Obj1.InsertAtBeginning(3);
Obj1.DeleteAtBeginning();
Obj1.DeleteAtEnd();
Obj1.PrintLinkedList();

const Obj2 = new LinkedList();

Obj2.InsertAtEnd(5);
Obj2.InsertAtEnd(4);
Obj2.InsertAtEnd(3);
Obj2.DeleteAtBeginning();
Obj2.DeleteAtEnd();
Obj2.PrintLinkedList();

const Obj3 = new LinkedList();

Obj3.InsertAtBeginning(23);
Obj3.InsertAtBeginning(32);
Obj3.InsertAtBeginning(33);
Obj3.InsertAtBeginning(43);
Obj3.InsertAtBeginning(45);
Obj3.InsertAfter(77, 32);
Obj3.PrintLinkedList();
