class HoleModel extends RectangleModel {
	constructor(rectangle) {
		super(rectangle);
	}

	paint() {
		cx.globalAlpha = this.getPhaseAlpha();
		this.drawImageFunction((~~(Game.elapsedTime / 3) % 4) * frame.imageSize, frame.imageSize * this.index, frame.imageSize, frame.imageSize);
	}

	static getNode() {
		let count = 3;
		let rects = [];
		for (let i = 0; i < count; i++) {
			rects.push(HoleModel.create('hole' + [i + 1]));
		}

		return rects;
	}
}
