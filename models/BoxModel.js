class BoxModel extends RectangleModel {
	constructor(rectangle) {
		super(rectangle);
	}

	onStageComplete() {
		this.anim = undefined;
		this.stage++;
		activeElements.forEach((el, i) => {
			if (el.name === this.name) {
				activeElements.splice(i, 1);
			}
		});
		Game.checkStageComplete();
	}

	isOnHole(rectangle) {
		return (
			this.x >= rectangle.x &&
			this.x <= rectangle.x + 10 &&
			this.y >= rectangle.y &&
			this.y <= rectangle.y + 10
		);
	}

	crawl(axis, iter, midSpd) {
		this[axis] += midSpd;
		let thereIsIntersection = false;
		walls.forEach((wall) => {
			if (this.intersects(wall)) {
				thereIsIntersection = true;
				this[axis] -= midSpd;
			}
		});
		if (!thereIsIntersection) {
			activeElements.forEach((el) => {
				if (this.intersects(el)) {
					if (el != holes[iter] && el != this && el != gates[iter]) {
						thereIsIntersection = true;
						this[axis] -= midSpd;
					}
				}
			});
		}
		return thereIsIntersection;
	}

	handleTheFall() {
		if (this.isOnHole(holes[this.index])) {
			this.fallingAnimation();
		}
	}

	openGate(i) {
		let hole = holes[i];
		if (player.intersects(hole) || this.intersects(hole)) {
			if (gates[i].w > 0) {
				// pecharPortal.play();
			}
		} else if (!player.intersects(hole) && !this.intersects(hole)) {
			if (World.phase == 5 && hole != holes[2] && gates[i].w <= 0) {
				// pecharPortal.play();
			}
		}
	}

	paint() {
		cx.globalAlpha = this.getPhaseAlpha();

		var num1 = this.index * 2;
		if (!this.anim) {
			if (World.phase === 12) {
				num1 = 6;
			}
			this.drawImageFunction(
				(~~(Game.elapsedTime / 3) % 8) * frame.imageSize,
				frame.imageSize * num1,
				frame.imageSize,
				frame.imageSize
			);
		} else {
			this.drawImageFunction(
				this.anim * frame.imageSize,
				frame.imageSize * (num1 + 1),
				frame.imageSize,
				frame.imageSize
			);
		}
	}

	fallingAnimation() {
		if (!this.anim) this.anim = 0;
		if (this.anim >= 0 && this.anim < 9) {
			// caixaCae.play();
			this.anim++;
		} else if (this.anim == 9) {
			this.onStageComplete();
		}
	}
}

BoxModel.create = function (rectangle) {
	let rect = new BoxModel(rectangle);
	RectangleModel.activeElements[rectangle] = rect;
	return rect;
};

BoxModel.act = function (boxes) {
	boxes.eachInStage((box) => {
		box.handleTheFall();
	});
};
BoxModel.getNode = function () {
	let count = 3;
	let rects = [];
	for (let i = 0; i < count; i++) {
		rects.push(BoxModel.create('box' + [i + 1]));
	}
	rects.eachInStage = function (evt) {
		this.filter((el) => el.stage === World.phase).forEach((box, i) => {
			evt(box, i);
		});
	};
	rects.moveToStage = function () {
		rects.forEach((box) => {
			if (box.stage < World.selectedPhase) {
				box.stage = World.selectedPhase;
			}
		});
	};
	return rects;
};
