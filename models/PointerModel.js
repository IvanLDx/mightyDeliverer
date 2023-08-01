class PointerModel extends RectangleModel {
	constructor() {
		super('pointer');
		this.image = helpers.createImage('cursor');
		this.resetButton = RectangleModel.create('resetButton');
	}

	clic() {
		if (this.intersects(resetBtn) && World.phase > -12) {
			World.phase -= World.phase * 2 - 1;
			resetBtn.pos = true;
		}
	}

	move(e) {
		Pointer.x = e.clientX;
		Pointer.y = e.clientY;
		Pointer.mov = 30;
	}

	moveDelay() {
		if (this.mov > 0) {
			this.mov--;
		}
	}

	paint() {
		if (this.mov > 0) {
			cx.drawImage(
				this.image,
				(~~(Game.elapsedTime / 3) % 4) * frame.imageSize,
				0,
				frame.imageSize,
				frame.imageSize,
				this.x - frame.blockSize * 0.2,
				this.y - frame.blockSize * 0.2,
				frame.blockSize * 0.4,
				frame.blockSize * 0.4
			);
		}
	}

	paintResetButton() {
		cx.drawImage(
			this.resetButton.image,
			0,
			0,
			frame.imageSize,
			frame.imageSize,
			this.resetButton.x,
			this.resetButton.y,
			this.resetButton.w,
			this.resetButton.h
		);
	}
}
