class LightFXModel {
	constructor() {
		this.state = 'add';
		this.globalAlpha = 1;
		this.titleShadow = 1;
		this.minimumAlpha = 0.7;
		this.slowFlickering = 0.01;
		this.fastFlickering = 0.1;
		this.turnTheLightOn = false;
	}

	act() {
		switch (this.state) {
			case 'add':
				if (this.turnTheLightOn) {
					this.globalAlpha = this.globalAlpha += this.fastFlickering;
				} else {
					this.globalAlpha += this.slowFlickering;
				}
				if (this.globalAlpha >= 1) {
					this.state = 'substract';
				}
				break;
			case 'substract':
				if (this.globalAlpha <= this.minimumAlpha) {
					this.state = 'add';
				} else {
					this.turnTheLightOn = false;
					this.globalAlpha -= this.slowFlickering;
				}
				break;
			default:
				break;
		}
	}

	turnOff() {
		if (this.globalAlpha > 0.1) {
			this.globalAlpha -= this.fastFlickering;
		} else {
			this.globalAlpha = this.slowFlickering;
		}
	}

	turnOn() {
		this.turnTheLightOn = true;
	}
}
