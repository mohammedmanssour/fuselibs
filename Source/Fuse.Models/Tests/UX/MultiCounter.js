import Counter from "./MultiCounter_Counter"

export default class MultiCounter {
	constructor() {
		this.counters = [ new Counter() ];
	}

	addCounter() {
		this.counters.push(new Counter());
	}

	removeCounter() {
		this.counters.pop();
	}
};
