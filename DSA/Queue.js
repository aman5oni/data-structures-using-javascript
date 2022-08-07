// Circular Queue

const Queue = []
const Max = 5

const Enqueue = (value) => {
    if(Queue.length < Max){
        Queue.push(value)
    console.log(`Enqueue Element ${value}`)
    }
    else{
        console.log("Queue Exceed")
    }
}

const Dequeue = () => {
    console.log(`Dequeue Element ${Queue.shift()}`)
}

const PrintQueue = () => {
    console.log(Queue)
}

const Length = () => {
    console.log(`Length Is ${Queue.length}`)
}


Enqueue(1)
Enqueue("aman")
Enqueue("aman")
Enqueue("aman")
Enqueue("aman")
Enqueue("aman")
Dequeue()
Length()
PrintQueue()
