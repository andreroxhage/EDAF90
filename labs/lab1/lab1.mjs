'use strict';

/**
 * Reflection question 1
 * It's not necessary because returning non existent properties will result in 'undefined' which is falsy.
 *
 * In contrary, when using Java returning a non existent property will cause an error, NullPointerException
 *  */
import {v4 as uuidv4} from 'uuid';
import inventory from './inventory.mjs';
console.log('\n=== beginning of printout ================================');
console.log('inventory:', inventory);

console.log('\n--- Object.keys() ---------------------------------------');
const names = Object.keys(inventory);
names
	.sort((a, b) => a.localeCompare(b, 'sv', {sensitivity: 'case'}))
	.forEach((name) => console.log(name));

console.log('\n--- for ... in ---------------------------------------');
for (const name in inventory) {
	console.log(name);
}

/**
 * Reflection question 2
 *
 * The Object.keys function only visits own properties when iterating, but not inherited properties.
 * However, the for...in... function also visits inherited properties. The two would thus create
 * different outputs if there were inherited name properties.
 */

console.log('\n--- Assignment 1 ---------------------------------------');

function makeOptions(inv, prop) {
	return Object.keys(inv) // array of ingredients using the keys from inv
		.filter((item) => inv[item][prop]) // filter based on specified property
		.map((item) => {
			const {price} = inv[item];
			return `<option value="${item}" key="${item}" >${item}, ${price}kr</option>`;
		})
		.reduce((options, option) => option + '\n' + options, '');
}

console.log(makeOptions(inventory, 'foundation'));

console.log('\n--- Assignment 2 ---------------------------------------');
class Salad {
	static #instanceCounter = 0;

	constructor(arg) {
		// let instanceId = 'salad_' + Salad.instanceCounter++;
		let uuid = uuidv4(); // Generates a unique id.

		/*
		Object.defineProperty(this, 'id', {
			value: instanceId,
			writable: false, // Making it read only
		});
		*/

		// Should copy existing uuid if the argument is a Salad
		if (arg instanceof Salad) {
			uuid = arg.uuid;
		}

		// Handles the creation of ingredients or copying
		if (arg !== undefined) {
			// Is used for making a new Salad by copying ingredients from another instance or string
			this.ingredients = {...arg.ingredients};
		} else {
			this.ingredients = {};
		}

		this.id = 'salad_' + Salad.#instanceCounter++;
		this.uuid = uuid;
	}
	add(name, properties) {
		this.ingredients[name] = properties;
		return this;
	}
	remove(name) {
		delete this.ingredients[name];
		return this;
	}
	static parse(jasonDerulo) {
		if (Array.isArray(JSON.parse(jasonDerulo))) {
			const saladsArray = JSON.parse(jasonDerulo);
			return saladsArray.map((saladData) => new Salad(saladData));
		}
		if (typeof jasonDerulo === 'string') {
			return new Salad(JSON.parse(jasonDerulo));
		}

		return undefined;
	}
}

let myCaesarSalad = new Salad()
	.add('Sallad', inventory['Sallad'])
	.add('Kycklingfilé', inventory['Kycklingfilé'])
	.add('Bacon', inventory['Bacon'])
	.add('Krutonger', inventory['Krutonger'])
	.add('Parmesan', inventory['Parmesan'])
	.add('Ceasardressing', inventory['Ceasardressing'])
	.add('Gurka', inventory['Gurka']);
console.log(JSON.stringify(myCaesarSalad) + '\n');
myCaesarSalad.remove('Gurka');
console.log(JSON.stringify(myCaesarSalad) + '\n');

Salad.prototype.getPrice = function () {
	return Object.values(this.ingredients)
		.map((item) => item.price || 0)
		.reduce((total, p) => total + p, 0);
};

Salad.prototype.count = function (props) {
	return Object.values(this.ingredients).filter(
		(ingredient) => ingredient[props]
	).length;
};

console.log('\n--- Assignment 3 ---------------------------------------');
console.log('En ceasarsallad kostar ' + myCaesarSalad.getPrice() + 'kr');
// En ceasarsallad kostar 45kr
console.log(
	'En ceasarsallad har ' +
		myCaesarSalad.count('lactose') +
		' ingredienser med laktos'
);
// En ceasarsallad har 2 ingredienser med laktos

console.log(
	'En ceasarsallad har ' + myCaesarSalad.count('extra') + ' tillbehör'
);
// En ceasarsallad har 3 tillbehör

console.log(
	'\n--- reflection question 3 --------------------------------------- \n .prototype is a property of constructor function and returns the prototype on \n getPrototypeOf() is a method that returns an instance of an object, that is (previous?) in the object prototype chain. \n \n How do you get the next object in the prototype chain:\n getPrototypeOf()\n \n Which objects have a prototype property:	\n Constructor functions have a prototype property'
);
console.log('\ntypeof Salad: ' + typeof Salad);
console.log('typeof Salad.prototype: ' + typeof Salad.prototype);
console.log(
	'typeof Salad.prototype.prototype: ' + typeof Salad.prototype.prototype
);
console.log('typeof myCaesarSalad: ' + typeof myCaesarSalad);
console.log(
	'typeof myCaesarSalad.prototype: ' + typeof myCaesarSalad.prototype
);

console.log('check 1: ' + (Salad.prototype === Object.getPrototypeOf(Salad)));

console.log(
	'check 2: ' + (Salad.prototype === Object.getPrototypeOf(myCaesarSalad))
);

console.log(
	'check 3: ' + (Object.prototype === Object.getPrototypeOf(Salad.prototype))
);

console.log('\n--- Assignment 4 ---------------------------------------');

const singleText = JSON.stringify(myCaesarSalad);
const arrayText = JSON.stringify([myCaesarSalad, myCaesarSalad]);

let s1 = new Salad();
console.log('s1.id: ' + s1.id + ' , s1.uuid: ' + s1.uuid);
const objectCopy = new Salad(s1);

console.log(
	'\n (copy of myCeasarSalad).id: ' +
		objectCopy.id +
		' , (copy of myCeasarSalad).uuid: ' +
		objectCopy.uuid +
		'\n'
);
const singleCopy = Salad.parse(singleText);
const arrayCopy = Salad.parse(arrayText);
console.log(arrayText);
console.log(arrayCopy + '\n');

console.log('original myCaesarSalad\n' + JSON.stringify(myCaesarSalad));
console.log('new(myCaesarSalad)\n' + JSON.stringify(objectCopy));
console.log('Salad.parse(singleText)\n' + JSON.stringify(singleCopy));
console.log('Salad.parse(arrayText)\n' + JSON.stringify(arrayCopy));

singleCopy.add('Gurka', inventory['Gurka']);
console.log('originalet kostar ' + myCaesarSalad.getPrice() + ' kr');
console.log('kopian med gurka kostar ' + singleCopy.getPrice() + ' kr');

console.log('\n--- Assignment 5 ---------------------------------------');

// inherits properties and methods from Salad
class GourmetSalad extends Salad {
	// Add ingredient with optional size newSize, otherwise size 1 is default
	add(name, properties, newSize = 1) {
		if (this.ingredients.hasOwnProperty(name)) {
			// Calculate newSize=oldSize+addedSize. Adds this...size if ==! falsy, otherwise adds 1
			newSize += this.ingredients[name].size ?? 1;
		}
		// Calls the parent add but with a new object having the additional (size) property of the ingredient
		return super.add(name, {...properties, size: newSize});
	}

	// Calculate the price of sallad using the size of each ingredient. handles special cases when size is undefined
	getPrice() {
		return Object.values(this.ingredients).reduce(
			(totalPrice, ingredient) =>
				totalPrice + (ingredient.price * ingredient.size || ingredient.price),
			0
		);
	}
}

let myGourmetSalad = new GourmetSalad()
	.add('Sallad', inventory['Sallad'], 0.5)
	.add('Kycklingfilé', inventory['Kycklingfilé'], 2)
	.add('Bacon', inventory['Bacon'], 0.5)
	.add('Krutonger', inventory['Krutonger'])
	.add('Parmesan', inventory['Parmesan'], 2)
	.add('Ceasardressing', inventory['Ceasardressing']);
console.log(
	'Min gourmetsallad med lite bacon kostar ' + myGourmetSalad.getPrice() + ' kr'
);
myGourmetSalad.add('Bacon', inventory['Bacon'], 1);
console.log('Med extra bacon kostar den ' + myGourmetSalad.getPrice() + ' kr');

console.log('\n--- Assignment 6 ---------------------------------------');

console.log('Min gourmetsallad har id: ' + myGourmetSalad.id);

let s2 = new Salad();
console.log('Min s2 har id: ' + s2.id);

console.log('Min gourmetsallad har uuid: ' + myGourmetSalad.uuid);
console.log('Min gourmetsallad har id: ' + myGourmetSalad.id);

/**
 * Reflection question 4
 *
 * Static properties are stored in function objects.
 *
 * Static properties is shared among all instances of the class and it's associated with the class, not individual objects.
 *
 */
/**
 * Reflection question 5
 *
 * Yes! Properties can be set to read only using defineProperty()
 * 
 * 
 * Object.defineProperty(this, 'id', {
      value: instanceId,
      writable: false, // Make it read-only
    });
 * 
 *
 */

/**
 * Reflection question 6
 *
 * Properies can be private using #name as name convention.
 *
 */
