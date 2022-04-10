const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  #root;
  constructor() {
    this.#root = null;
  }
  root() {
    return this.#root;
  }

  add(data) {
    const node = new Node(data);
    if (this.#root == null) {
      this.#root = node;
      return this
    }
    let cur = this.#root
    while(cur) {
      if (data < cur.data) {
        if (cur.left == null) {
          cur.left = node;
          return this;
        }
        cur = cur.left;
      } else {
        if (cur.right == null) {
          cur.right = node;
          return this;
        }
        cur = cur.right
      }
    }
  }
  

  has(data) {
    let cur = this.#root;
    while (cur) {
      if (cur.data == data) return true;
      else if (data < cur.data) cur = cur.left;
      else cur = cur.right
    }
    return false
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};