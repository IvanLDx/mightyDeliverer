class HoleModel extends RectangleModel {
	constructor(rectangle) {
		super(rectangle);
	}

	paint() {
		cx.globalAlpha = this.getPhaseAlpha();
		this.drawImageFunction(
			(~~(Game.elapsedTime / 3) % 4) * frame.imageSize,
			frame.imageSize * this.index,
			frame.imageSize,
			frame.imageSize
		);
	}
}

HoleModel.create = function (rectangle) {
	let rect = new HoleModel(rectangle);
	RectangleModel.activeElements[rectangle] = rect;
	return rect;
};

HoleModel.getNode = function () {
	let count = 3;
	let rects = [];
	for (let i = 0; i < count; i++) {
		rects.push(HoleModel.create('hole' + [i + 1]));
	}

	return rects;
};
