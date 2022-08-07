class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.totalNodes = 0;
  }

  Insert = (data) => {
    const treeNode = new TreeNode(data);

    if (this.root == null) {
      this.root = treeNode;
      console.log(`${data} Pushed This Is First Data`);
      this.totalNodes += 1

    } else {
      let Queue = [];
      Queue.push(this.root);

      while (Queue.length > 0) {
        let current = Queue.shift();

        if (current.left == null) {
          current.left = treeNode;
          console.log(`${data} Pushed`);
          this.totalNodes += 1
          break;
        } else {
          Queue.push(current.left);
        }
        if (current.right == null) {
          current.right = treeNode;
          console.log(`${data} Pushed`);
          this.totalNodes += 1
          break;
        } else {
          Queue.push(current.right);
        }
      }
    }
  };

  DiameterOfTree = () => {
    let count = 0
    if(this.root == null){
        console.log(`Tree Is Empty`)
    }else{
        let currentL = this.root
        let currentR = this.root
        count += 1
        while(currentL.left != null){
            count += 1
            currentL = currentL.left
        }
        while(currentR.right != null){
            count += 1
            currentR = currentR.right
        }
        console.log(`${count} Is The Diameter Of Tree`)
    }
  }

  TotalNodes = () => {
    
    if(this.root == null){
        console.log(`Tree Is Empty`)
    }else{
        console.log(`${this.totalNodes} Nodes`)
    }
  }

  

  InOrderTraversal = () => {
    if (this.root == null) {
      console.log(`Tree Is Empty`);
    } else {
      let Stack = [];
      let Data = [];
      let current = this.root;

      while (Stack.length > 0 || current != null) {
        while (current != null) {
          Stack.push(current);
          current = current.left;
        }

        current = Stack.pop();
        Data.push(current.data);
        current = current.right;
      }
      console.log(Data.join(" ")," InOrder Traversal");
    }
  };

  PreOrderTraversal = () => {
    if (this.root == null) {
      console.log(`Tree Is Empty`);
    } else {
      let Stack = [];
      let current = this.root;
      let Data = [];

      while (current != null || Stack.length > 0) {
        while (current != null) {
          Data.push(current.data);
          Stack.push(current);
          current = current.left;
        }
        current = Stack.pop();
        current = current.right;
      }
      console.log(Data.join(" ")," PreOrder Traversal");
    }
  };

  PostOrderTraversal = () => {
    if (this.root == null) {
      console.log(`Tree Is Empty`);
    } else {
      let Stack = [];
      let Data = [];
      let previous = null;
      Stack.push(this.root);
      while (Stack.length > 0) {
        let current = Stack[Stack.length - 1];

        if (previous == null || previous.left == current || previous.right == current) {
          if (current.left != null) Stack.push(current.left);
          else if (current.right != null) Stack.push(current.right);
          else {
            Stack.pop();
            Data.push(current.data);
          }

         
        } else if (current.left == previous) {
          if (current.right != null) Stack.push(current.right);
          else {
            Stack.pop();
            Data.push(current.data);
          }

         
        } else if (current.right == previous) {
          Stack.pop();
          Data.push(current.data);
        }

        previous = current;
      }
      console.log(Data.join(" ")," PostOrder Traversal")
    }
  };

  LevelOrderTraversal = () => {
    if (this.root == null) {
      console.log(`Tree Is Empty`);
    } else {
      let Stack = [];
      let Data = [];
      Stack.push(this.root);
      Data.push(this.root.data);
      while (Stack.length != 0) {
        let current = Stack.pop();

        if (current.left != null) {
          Stack.push(current.left);
          Data.push(current.left.data);
        }

        if (current.right != null) {
          Stack.push(current.right);
          Data.push(current.right.data);
        }
      }
      console.log(Data.join(" "),"LevelOrder Traversal");
    }
  };


}

const Obj = new Tree();
Obj.Insert(2);
Obj.Insert(3);
Obj.Insert(4);
Obj.Insert(5);
Obj.Insert(6);
Obj.Insert(7);
Obj.Insert(8);
Obj.DiameterOfTree();
Obj.LevelOrderTraversal();
Obj.InOrderTraversal();
Obj.PreOrderTraversal();
Obj.PostOrderTraversal();
Obj.TotalNodes()