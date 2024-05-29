import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0, -2, 1]);
const characterColleciton = new CharactersCollection('anyway')

const sorterNum = new Sorter(numbersCollection);
sorterNum.sort();
console.log(numbersCollection.data);

const sorterChar = new Sorter(characterColleciton);
sorterChar.sort();
console.log(characterColleciton.data);

