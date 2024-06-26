"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0, -2, 1]);
const characterColleciton = new CharactersCollection_1.CharactersCollection('anyway');
const sorterNum = new Sorter_1.Sorter(numbersCollection);
sorterNum.sort();
console.log(numbersCollection.data);
const sorterChar = new Sorter_1.Sorter(characterColleciton);
sorterChar.sort();
console.log(characterColleciton.data);
