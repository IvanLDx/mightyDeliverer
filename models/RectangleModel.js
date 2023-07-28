class RectangleModel {
	constructor(rectangle) {
		this.size = frame.blockSize * elements[rectangle].size || 0;
		this.w =
			frame.blockSize *
				(elements[rectangle].w || elements[rectangle].size) ||
			this.size;
		this.x =
			frame.blockSize * elements[rectangle].x +
				(frame.blockSize - this.w) / 2 || 0;

		this.h =
			frame.blockSize *
				(elements[rectangle].h || elements[rectangle].size) ||
			this.size;
		this.y =
			frame.blockSize * elements[rectangle].y +
				(frame.blockSize - this.h) / 2 || 0;

		this.spd = frame.blockSize * elements[rectangle].spd || 0;
		this.mov = elements[rectangle].mov || false;
		this.pos = elements[rectangle].pos || false;
		this.draw = elements[rectangle].draw || 0;
		this.image = elements[rectangle].image
			? this.getImage(elements[rectangle].image)
			: null;
		this.stage = elements[rectangle].stage || false;
		this.index = elements[rectangle].index || 0;
	}

	// AVDERTENCIA!! As imaxes rompen polas esquinas, hai que cambiar os param ó chamala.
	// Ex: chanN[i].fillAnime(img,cx,cam,x+1,y,78,80);
	// En vez de ...(img,cx,cam,x,y,80,80);
	// Polo tanto: imgX+1 e ingW-2
	paint(imgX, imgY, imgW, imgH, image) {
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
	rects.eachInStage = function (evt) {
		this.filter((el) => condition(el)).forEach((box, i) => {
			evt(box, i);
		});
	};
	return rects;
};

RectangleModel.setValueAccordingBlockSize = function (value) {
	return frame.blockSize * value;
};
RectangleModel.setSameValue = function (value) {
	return value;
};
RectangleModel.activeElements = {};
