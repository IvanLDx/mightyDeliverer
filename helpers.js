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
	}
};
