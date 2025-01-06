const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = [];  // Array to store stack elements
  }

  // Adds an element to the stack
  push(element) {
    this.items.push(element);
  }

  // Removes the top element from the stack and returns it
  pop() {
    return this.items.pop();
  }

  // Returns the top element without removing it
  peek() {
    return this.items[this.items.length - 1];
  }
}

module.exports = {
  Stack
};
