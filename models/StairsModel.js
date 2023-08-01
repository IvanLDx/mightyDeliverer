class StairsModel {
	constructor() {
		this.up = StairsModel.create('upStairs');
		this.down = StairsModel.create('downStairs');
		this.spark = RectangleModel.create('downStairsLight');
		this.sparkingStage = 0;
		this.sparkingLapse = 0;
		this.sparkingFrame = 0;
	}

	lights() {
		if (this.sparkingLapse < 14) {
			// powerUp.play();
		}
		stairSpark.w = frame.blockSize;
		this.sparkingLapse++;
		this.sparkingStage = World.phase;
		this.sparkingFrame = Math.floor(this.sparkingLapse / 2);

		if (this.sparkingLapse > 26) {
			this.sparkingLapse = 14;
		}
	}
}
StairsModel.sparkles = function () {
	Stairs.lights();

	if (Stairs.sparkingStage != World.phase) {
		Stairs.sparkingFrame = 0;
		stairSpark.w = 0;
	}
};

StairsModel.create = function (rectangle) {
	let rect = new BoxModel(rectangle);
	rect.paint = function () {
		cx.globalAlpha = LightFX.globalAlpha;
		rect.drawImageFunction(
			frame.imageSize * rect.pos,
			0,
			frame.imageSize,
			frame.imageSize
		);
	};
	RectangleModel.activeElements[rectangle] = rect;
	return rect;
};
