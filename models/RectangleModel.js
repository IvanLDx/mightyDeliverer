class RectangleModel {
	constructor(rectangle) {
		let rect = elements[rectangle];
		this.size = frame.blockSize * rect.size || 0;
		this.name = rect.name || null;
		this.w = frame.blockSize * (rect.w || rect.size) || this.size;
		this.x = frame.blockSize * rect.x + (frame.blockSize - this.w) / 2 || 0;

		this.h = frame.blockSize * (rect.h || rect.size) || this.size;
		this.y = frame.blockSize * rect.y + (frame.blockSize - this.h) / 2 || 0;

		this.spd = frame.blockSize * rect.spd || 0;
		this.mov = rect.mov || false;
		this.pos = rect.pos || false;
		this.draw = rect.draw || 0;
		this.image = rect.image ? this.getImage(rect.image) : null;
		this.stage = rect.stage || false;
		this.index = rect.index || 0;
	}

	// AVDERTENCIA!! As imaxes rompen polas esquinas, hai que cambiar os param ó chamala.
	// Ex: chanN[i].fillAnime(img,cx,cam,x+1,y,78,80);
	// En vez de ...(img,cx,cam,x,y,80,80);
	// Polo tanto: imgX+1 e ingW-2
	paint(imgX, imgY, imgW, imgH, image) {
		this.drawImageFunction(imgX, imgY, imgW, imgH, image);
	}

	drawImageFunction(imgX, imgY, imgW, imgH, image) {
		cx.drawImage(
			image || this.image,
			imgX,
			imgY,
			imgW,
			imgH,
			this.x - Camera.x,
			this.y - Camera.y,
			this.w,
			this.h
		);
	}

	getImage(img) {
		let image = new Image();
		image.src = `img/${img}.png`;
		return image;
	}

	intersects(rectangle) {
		return (
			this.x < rectangle.x + rectangle.w &&
			this.x + this.w > rectangle.x &&
			this.y < rectangle.y + rectangle.h &&
			this.y + this.h > rectangle.y
		);
	}

	getPhaseAlpha() {
		return World.phase > 0 ? 1 : LightFX.globalAlpha;
	}
}

RectangleModel.create = function (rectangle) {
	let rect = new RectangleModel(rectangle);
	RectangleModel.activeElements[rectangle] = rect;
	return rect;
};

RectangleModel.getNode = function (rectangles, length, condition) {
	let rects = [];
	for (let i = 0; i < length; i++) {
		rects.push(RectangleModel.create(rectangles + [i + 1]));
	}
	return rects;
};

RectangleModel.setValueAccordingBlockSize = function (value) {
	return frame.blockSize * value;
};
RectangleModel.setSameValue = function (value) {
	return value;
};
RectangleModel.activeElements = {};
