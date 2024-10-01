const helpers = {
	createImage: (imageName) => {
		let newImage = new Image();
		newImage.src = `img/${imageName}.png`;
		return newImage;
	},
	createSound: (soundName) => {
		var newSound = new Audio();
		newSound.src = `audio/${soundName}.mp3`;
		return newSound;
	},
	getRectangleNodeModels: (rectangles, length) => {
		let rects = [];
		for (let i = 0; i < length; i++) {
			rects.push(RectangleModel.create(rectangles + [i + 1]));
		}
		return rects;
	},
	handleLabPosition: () => {
		if (World.phase === 11) {
			lab.pos = 0;
			lab.w = frame.blockSize * 3;
			lab.x = frame.blockSize * 11;
			lab.y = frame.blockSize * 9;
			camion.w = 0;
		} else if (World.phase === 12) {
			lab.pos = 3;
			lab.w = frame.blockSize * 3;
			lab.x = frame.blockSize * 9;
			lab.y = frame.blockSize * 6;
			camion.w = frame.blockSize * 3;
		} else {
			lab.w = 0;
			camion.w = 0;
		}
	}
};
