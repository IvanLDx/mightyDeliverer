class CameraModel {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.frame = {};
	}

	setFrame({ blockSize, imageSize }) {
		this.frame = {
			blockSize: blockSize || 0, // General block size
			imageSize: imageSize || 0, // Actual animation image size
			count: 0 // Number of frames per animation
		};
		return this.frame;
	}

	focus(player) {
		let x = player.x + player.w / 2;
		let y = player.y + player.h / 2;
		this.x = x - cv.width / 2;
		this.y = y - cv.height / 2;
	}

	resize() {
		cv.width = window.innerWidth;
		cv.height = window.innerHeight;
	}
}
