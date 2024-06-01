class NodeElement {
  next: NodeElement | null = null;
  constructor(public data: number) {}
}

export class LinkedList {
  head: NodeElement | null = null;

  add(data: number): void {
    const node = new NodeElement(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let tail = this.head;
    while (tail.next) {
      length++;
      tail = tail.next;
    }
    return length;
  }

  at(index: number): NodeElement {
    if (!this.head) {
      throw new Error("index out of bounds");
    }

    let counter = 0;
    let node: NodeElement | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error("index out of bounds");
  }
}
