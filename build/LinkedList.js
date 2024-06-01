"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class NodeElement {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
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
    get length() {
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
    at(index) {
        if (!this.head) {
            throw new Error("index out of bounds");
        }
        let counter = 0;
        let node = this.head;
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
exports.LinkedList = LinkedList;
