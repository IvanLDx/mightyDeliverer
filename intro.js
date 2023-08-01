// INTRO -------------------------------------------------------------------------
var intro1 = new RectangleModel('intro1');
var intro2 = new RectangleModel('intro2');
intro2.paint = function () {
	cx.drawImage(
		this.image,
		0,
		0,
		this.w,
		this.h,
		this.x,
		this.y,
		this.w,
		this.h
	);
};

class Intro {
	constructor() {
		this.count = 0;
		this.speed = 0;
		this.glitch = this.createSound();
		this.lastFrame = 11;
		this.totalTime = 6; // Default 80
	}

	act() {
		intro1.x = (cv.width - intro1.w) / 2;
		intro1.y = (cv.height - intro1.h) / 2;
		// this.glitch.play();
		if (this.count < 100) {
			this.count++;
		}

		this.speed = Math.floor(this.count / 4);

		if (this.count < this.totalTime) {
			setTimeout(() => {
				this.act();
			}, FPS);
		} else {
			this.count = 0;
			World.phase = -1.2;
			Game.act();
			this.showTitle();
		}
		this.paint();
	}

	paint() {
		cx.clearRect(0, 0, cv.width, cv.height);
		let currentFrame = this.count <= 45 ? this.speed : this.lastFrame;
		intro1.paint(0, currentFrame * intro1.h, intro1.w, intro1.h);
	}

	showTitle() {
		cx.fillStyle = '#222';
		cx.fillRect(0, 0, cv.width, cv.height);
		intro2.x = (cv.width - intro2.w) / 2;
		intro2.y = (cv.height - intro2.h) / 4;
	}

	createSound() {
		let glitch = helpers.createSound('glitch');
		glitch.volume = 0.6;
		return glitch;
	}
}
Intro.init = function () {
	let intro = new Intro();
	intro.act();
};
