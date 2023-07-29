class GateModel extends RectangleModel {
	constructor(rectangle) {
		super(rectangle);
	}

	paint() {
		cx.globalAlpha = LightFX.globalAlpha;
		if (!this.intersects(player) && !this.intersects(boxes[this.index])) {
			this.drawImageFunction(
				(~~(Game.elapsedTime / 3) % 8) * frame.imageSize,
				frame.imageSize * 1,
				frame.imageSize,
				frame.imageSize
			);
		}
	}
}

GateModel.create = function (rectangle) {
	let rect = new GateModel(rectangle);
	RectangleModel.activeElements[rectangle] = rect;
	return rect;
};

GateModel.getNode = function () {
	let count = 3;
	let rects = [];
	for (let i = 0; i < count; i++) {
		rects.push(GateModel.create('gate' + [i + 1]));
	}

	return rects;
};
