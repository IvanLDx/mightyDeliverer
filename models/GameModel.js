class GameModel {
	constructor() {
		this.isStageComplete = false;
		this.elapsedTime = 0;
	}

	checkStageComplete() {
		this.isStageComplete = boxes.every((box) => {
			return box.stage > World.phase;
		});
		return this.isStageComplete;
	}

	init() {
		Camera.resize();

		World.set(setArrayMap, 11);

		if (World.phase) this.act();
		else Intro.init();
	}

	elapses() {
		this.elapsedTime++;
		if (this.elapsedTime >= 800) {
			this.elapsedTime = 0;
		}
	}

	act() {
		Title.act();
		Pointer.moveDelay();

		// Comezar BSO
		if (World.phase && World.phase != -12) {
			// beepBox.play();
		}

		// IR A ENDING
		let isEnding = World.phase === 12;
		if (isEnding) {
			if (boxes[0].isOnHole(holes[0])) {
				World.phase = -12;
				resetBtn.w = 0;
				ending();
			}
		}

		if (World.phase > 0) {
			player.movement();
			BoxModel.act(boxes);
			LightFX.act();

			if (this.isStageComplete) {
				StairsModel.sparkles();
			}
		} else {
			World.switchPhase();
		}

		if (World.phase > 0) {
			if (player.intersects(downStairs)) {
				World.phase -= World.phase * 2;
				World.switchPhase();
			}
			if (player.intersects(upStairs)) {
				World.phase -= World.phase * 2 + 0.5;
				World.switchPhase();
			}
		}

		// Colocar lab
		if (
			World.phase == 11 ||
			World.phase == -10.2 ||
			World.phase == -12.7 ||
			World.phase == -11.5 ||
			World.phase == -11
		) {
			lab.pos = 0;
			lab.w = frame.blockSize * 3;
			lab.x = frame.blockSize * 11;
			lab.y = frame.blockSize * 9;
			camion.w = 0;
		} else if (
			World.phase == 12 ||
			World.phase == -11.2 ||
			World.phase == -12.5 ||
			World.phase == -12
		) {
			lab.pos = 3;
			lab.w = frame.blockSize * 3;
			lab.x = frame.blockSize * 9;
			lab.y = frame.blockSize * 6;
			camion.w = frame.blockSize * 3;
		} else {
			lab.w = 0;
			camion.w = 0;
		}

		Camera.focus(player);

		this.elapses();
		this.paint();

		setTimeout(() => {
			this.act();
		}, 1000 / FPS);
	}
	paint() {
		cx.fillStyle = '#202020';
		cx.fillRect(0, 0, cv.width, cv.height);

		activeElements.forEach((el) => {
			el.paint();
		});

		cx.globalAlpha = 1;

		// Draw player
		if (World.phase == -12.1) {
			player.w = 400;
			player.h = 240;
			player.image = camionEndImg;
			player.paint(
				0,
				(~~(Game.elapsedTime / 3) % 6) * frame.imageSize * 3,
				frame.imageSize * 5,
				frame.imageSize * 3
			);
			cx.drawImage(
				autoriaImg,
				(cv.width - 420) / 2,
				frame.blockSize * 9,
				420,
				128
			);
		} else {
			player.setFrames();
			player.paint(frame.yPosition, player.frameX, 80, 80);
		}

		cx.fillStyle = '#202020';
		cx.globalAlpha = LightFX.globalAlpha;
		walls.forEach((wall) => {
			wall.paint(wall.imgX, wall.imgY, 80, 80);
		});

		// Debuxar lab
		lab.paint(
			frame.imageSize * lab.pos,
			0,
			frame.imageSize * 3,
			frame.imageSize * 3
		);

		cx.globalAlpha = 1;

		// Debuxar camión
		camion.paint(0, 0, frame.imageSize * 3, frame.imageSize * 5);

		// Chispa DS
		if (
			boxes[0].stage == World.phase + 1 &&
			boxes[1].stage > World.phase &&
			boxes[2].stage > World.phase
		) {
			if (downStairs.pos == 2) {
				stairSpark.paint(
					Stairs.sparkingFrame * frame.imageSize,
					0,
					frame.imageSize,
					frame.imageSize * 2
				);
			} else if (downStairs.pos == 3) {
				stairSpark.paint(
					Stairs.sparkingFrame * frame.imageSize,
					frame.imageSize * 2,
					frame.imageSize,
					frame.imageSize * 2
				);
			}
		}

		// Interface
		cx.drawImage(
			resetBtn.image,
			0,
			0,
			frame.imageSize,
			frame.imageSize,
			resetBtn.x,
			resetBtn.y,
			resetBtn.w,
			resetBtn.h
		);

		Pointer.paint();

		// Ending
		// cx.globalAlpha = aNegro;
		// cx.fillStyle = '#202020';
		// cx.fillRect(0, 0, cv.width, cv.height);
		// cx.globalAlpha = 1;

		// Título
		cx.globalAlpha = Title.alpha;
		intro2.paint(0, 0, intro2.w, intro2.h);
		cx.globalAlpha = 1;
	}
}
