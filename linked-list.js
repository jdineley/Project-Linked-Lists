class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.length = 0,
        this.head = null,
        this.tail = null
    }

    append(value) {
        const newNode = new Node(value);
        if(this.length > 0) this.tail.next = newNode;
        else this.head = newNode;
        this.tail = newNode;
        this.length += 1;
        return newNode
    }
    prepend(value) {
        const newNode = new Node(value, this.head)
        this.head = newNode
        this.length++
        return newNode
    }
    size() {
        return this.length;
    }
    header() {
        return this.head
    }
    tailer() {
        return this.tail
    }
    at(index) {
        if(!index) return
        let i = 0;
        let head = this.head
        while(i < index && head !== null){
            head = head.next
            i++
        }
        if(head) return head
        else return `index ${index} is too big for this list`
    }
    pop() {
        if(this.length === 0) return null;
        const lastNode = this.tail;
        const secondToLastIndex = this.size() - 2
        let secondToLastNode = this.at(secondToLastIndex)
        secondToLastNode.next = null;
        this.tail = secondToLastNode;
        this.length -= 1;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return lastNode
    }
    contains(value) {
        let head = this.head;
        while(head) {
            if(head.value === value) return true
            head = head.next
        }
        return false
    }
    find(value) {
        let head = this.head;
        let i = 0;
        while(head) {
            if(head.value === value) return i
            head = head.next
            i++
        }
        return null
    }
    toString() {
        let head = this.head;
        while(head) {
            console.log(`${head.value} ->`)
            head = head.next
        }
        console.log(head)
    }
    insertAt(value, index) {
        if(index >= this.length) return 'The list is too short'
        else if (index === 0) this.prepend(value);
        else {
            let newBeforeNode = this.at(index-1)
            let newAfterNode = this.at(index)
            let newNode = new Node(value, newAfterNode)
            newBeforeNode.next = newNode
        }
        this.length++
        return newNode;

    }
    removeAt(index) {
        if(index >= this.length) return 'The list is too short'
        else if (index === this.length - 1) return this.pop();
        else {
            let removeNode = this.at(index)
            let beforeNode = this.at(index-1);
            let afterNode = this.at(index+1);
            beforeNode.next = afterNode;
            this.length--
            return removeNode;
        }    
        
    }
}


// Nodes can only be added via the linkedList class methods, in order to control list lengths
let list = new LinkedList()

// Random array
function randomNumberGenerator(max) {
    return Math.floor(Math.random()* max)
}
function randomNumArrayGenerator(n) {
    let arr = [];
    for(let i = 0; i < n; i++){
        arr.push(randomNumberGenerator(40))
    }
    return arr
}

let array = randomNumArrayGenerator(30)

// Populate linked list using array values
array.forEach(el => {
    list.append(el)
})