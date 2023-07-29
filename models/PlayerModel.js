class PlayerModel extends RectangleModel {
	constructor(rectangle) {
		super(rectangle);
		this.stepActive = false;
		this.frameX = elements[rectangle].image || 0;
	}

	setFrames() {
		let frames = elements.player.frames[this.pos];

		if (this.mov) {
			this.frameX = frame.imageSize * frames.walk;
			frame.yPosition = (~~(Game.elapsedTime / 3) % 4) * frame.imageSize;
			if (this.push == this.pos) {
				this.frameX = frame.imageSize * frames.push;
				frame.yPosition =
					(~~(Game.elapsedTime / 3) % 4) * frame.imageSize;
			}
		} else {
			this.frameX = frame.imageSize * frames.x;
			frame.yPosition = frame.imageSize * frames.y;
		}
	}

	setPositionOnResetMap() {
		let positionAfterStairs =
			World.currentStage[World.savedDirection].player;
		this.x = frame.blockSize * positionAfterStairs.x + 10;
		this.y = frame.blockSize * positionAfterStairs.y + 10;
	}

	useStairs(stairs, phase) {
		let stage = stages['stage' + Math.abs(parseInt(phase, 10))];
		if (stage[stairs]) {
			let [pjMovX, pjMovY] = stage[stairs].direction.split('-');
			this.mov = pjMovX;
			this.x += (pjMovX === 'left' ? -this.spd : this.spd) / 2;
			this.y += (pjMovY === 'up' ? -this.spd : this.spd) / 4;
		}
	}

	synchronizePos() {
		if (this.mov) this.pos = this.mov;
	}

	movement() {
		if (Key.right.pressed) {
			this.mov = Key.right.move;
			this.walk(this.spd, 'x');
		} else if (Key.left.pressed) {
			this.mov = Key.left.move;
			this.walk(-this.spd, 'x');
		}
		if (Key.up.pressed) {
			this.mov = Key.up.move;
			this.walk(-this.spd, 'y');
		} else if (Key.down.pressed) {
			this.mov = Key.down.move;
			this.walk(this.spd, 'y');
		}
		if (Key.noMovementKeyPressed()) {
			this.mov = false;
			this.push = false;
		}
	}

	checkIntersectionEvents(elements, axis) {
		elements.forEach((element) => {
			element.forEach((el) => {
				if (this.intersects(el)) {
					this.intersectionEvents(el, axis);
				}
			});
		});
	}

	intersectionEvents(object, axis) {
		if (this.mov == Key.down.move || this.mov == Key.right.move) {
			this[axis] = object[axis] - this.size;
		} else if (this.mov == Key.up.move || this.mov == Key.left.move) {
			this[axis] = object[axis] + object.size;
		}
		this.mov = false;
	}

	walk(spd, axis) {
		this[axis] += spd;

		boxes.eachInStage((box) => {
			if (this.intersects(box)) {
				let midSpd = spd / 2;
				this[axis] -= midSpd;
				var r = Math.floor(Math.random() * 3);
				// arrastres[r].play();
				let thereIsIntersection = box.crawl(axis, box.index, midSpd);
				if (thereIsIntersection) {
					arrastres[r].pause();
					this.intersectionEvents(box, axis);
				}
				this.push = this.mov;
			}
			box.openGate(box.index);
		});

		this.checkIntersectionEvents([holes, walls], axis);
		this.synchronizePos();
	}
}

PlayerModel.create = function (rectangle) {
	let rect = new PlayerModel(rectangle);
	RectangleModel.activeElements[rectangle] = rect;
	return rect;
};
