class TitleModel {
	constructor() {
		this.time = 100;
		this.alpha = 10;
	}

	lowerTheAlpha() {
		this.alpha = this.time / 9;
	}

	turnOff() {
		this.act = () => {
			return;
		};
	}

	act() {
		Title.time--;
		this.lowerTheAlpha();

		if (!this.time) {
			this.turnOff();
		}
	}
}
