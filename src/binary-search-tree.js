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

  find(data) {
    let cur = this.#root;
    while (cur) {
      if (cur.data == data) return cur;
      else if (data < cur.data) cur = cur.left;
      else cur = cur.right
    }
    return null
  }

  remove(data) {
    return this.#removeNode(this.#root, data)
    //throw new NotImplementedError('Not implemented');
  }
  #removeNode(target, data) {
    if (target === null) return null;
    
    if (data < target.data) {
      target.left = this.#removeNode(target.left,data);
      return target;
    }
    else if (data > target.data) {
      target.right = this.#removeNode(target.right,data)
      return target;
    }
    else {
      if (target.left === null && target.right === null) {
        target = null;
        return target;
      }
      else if (target.left === null) {
        target = target.right;
        return target;
      }
      else if (target.right === null) {
        target = target.left;
        return target;
      }
      else {
        let minimal = this.min(target.right);
        target.data = minimal;
        target.right = this.#removeNode(target.right, minimal);
        return target;
      }
    }
  }
  min(cur = this.#root) {
    while (cur) {
      if (!cur.left) return cur.data;
      cur = cur.left;
    }
  }

  max() {
    let cur = this.#root;
    while (cur) {
      if (!cur.right) return cur.data;
      cur = cur.right;
    }
  }
}

module.exports = {
  BinarySearchTree
};