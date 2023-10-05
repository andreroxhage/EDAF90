import {v4 as uuidv4} from 'uuid';

class Salad {
	static #instanceCounter = 1;

	constructor(arg) {
		// let instanceId = 'salad_' + Salad.instanceCounter++;
		let uuid = uuidv4(); // Generates a unique id.

		// Should copy existing uuid if the argument is a Salad
		if (arg instanceof Salad) {
			this.uuid = arg.uuid;
			this.ingredients = {...arg.ingredients};
			this.id=arg.id;
			return this;
		}

		// Handles the creation of ingredients or copying
		if (arg !== undefined) {
			// Is used for making a new Salad by copying ingredients from another instance or string
			this.ingredients = {...arg.ingredients};
			this.uuid = arg.uuid;
			this.id=arg.id;
			
		} else {
			this.ingredients = {};
			this.id = 'Sallad ' + Salad.#instanceCounter++;
			this.uuid = uuidv4();
		}

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

export default Salad;
