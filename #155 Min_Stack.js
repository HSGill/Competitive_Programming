/**
 * initialize your data structure here.
 */
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
var MinStack = function() {
    this.top = null;
    this.bottom = null;
    this.length =0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    const newNode = new Node(x);
    if(this.length==0){
        this.top = newNode;
        this.bottom = newNode;
    }
    else{
        let currentNode = this.top;
        this.top = newNode;
        this.top.next = currentNode;
    }
    this.length++;
    return this;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.length==0){
        return null;
    }
    if(this.top===this.bottom){
        return null;
    }
    //let currentNode = this.top;
    this.top = this.top.next;
    this.length--;
    return this;

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.top;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */