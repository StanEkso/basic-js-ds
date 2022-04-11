const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  #list;
  constructor() {
    this.#list = {
      value: null,
      next: null
    }
  }
  getUnderlyingList() {
    return this.#list;
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    if (this.#list.value === null) {
      this.#list.value = value;
      return this;
    }
    else {
      let cur = this.#list
      while (cur.next !== null) cur = cur.next;
      cur.next = {
        value: value,
        next: null
      }
    }
    return null;
  }

  dequeue() {
    let head = this.#list.value;
    if (this.#list.next) {
      this.#list = this.#list.next;
    }
    else {
      this.#list = {
        value: null,
        next: null
      }
    }
    return head;
  }
}

module.exports = {
  Queue
};
