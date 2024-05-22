"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // only works if the collection is number[]
                // if collection is an array of nunbers
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        [this.collection[j], this.collection[j + 1]] = [
                            this.collection[j + 1],
                            this.collection[j],
                        ];
                    }
                }
                else if (typeof this.collection === "string") {
                    console.log("Collection is a string");
                }
                // Only works if collection is a string
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0, -2, 1]);
sorter.sort();
console.log(sorter.collection);
