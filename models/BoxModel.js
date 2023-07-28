class BoxModel extends RectangleModel {
	constructor(rectangle) {
		super(rectangle);
	}

	onStageComplete() {
		this.anim = undefined;
		this.stage++;
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
		let interruptor = interruptores[i];
		if (player.intersects(interruptor) || this.intersects(interruptor)) {
			if (gates[i].w > 0) {
				// pecharPortal.play();
			}
			gates[i].x = 0;
			gates[i].w = 0;
		} else if (
			!player.intersects(interruptor) &&
			!this.intersects(interruptor)
		) {
			if (
				World.phase == 5 &&
				interruptor != interruptores[2] &&
				gates[i].w <= 0
			) {
				// pecharPortal.play();
			}
			gates[i].x = gates[i].mov;
			gates[i].w = gates[i].stage;
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
