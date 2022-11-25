class Stack {
  constructor() {
    this.array = [];
  }

  size() {
    return this.array.length;
  }

  push(item) {
    this.array.push(item);
  }

  pop() {
    if (this.array.length === 0) {
      throw new Error('스택이 비어있음');
    }

    return this.array.pop();
  }

  peek() {
    if (this.array.length === 0) {
      throw new Error('스택이 비어있음');
    }
    return this.array[this.size() - 1];
  }
}

module.exports = Stack;
