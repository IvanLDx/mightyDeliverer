function getRoundedNumber(num) {
	return Number((Math.floor(num) - num).toFixed(1));
}

function worldIsReadyToReset(num) {
	return getRoundedNumber(num) === -0.8 || getRoundedNumber(num) === -0.3;
}

class WorldModel {
	constructor() {
		this.phase = false;
		this.savedPhase = 1;
		this.usingStairs = false;
		this.changingLapse = 1;
		this.changingSpeed = 0.03;
		this.savedDirection = 'stageDown';
		this.savedPhase;
		this.selectedPhase = false;
		this.currentStage = 'stage1';
	}
	setInitialPhase(phase) {
		if (phase) {
			let loadPhase = phase - phase * 2 - 0.2;
			this.selectedPhase = phase;
			this.savedPhase = phase;
			this.phase = loadPhase;
			this.currentStage = this.getCurrentStageData();
		}
	}
	set(map, columns) {
		var col = 0;
		var row = 0;
		walls = [];
		map.forEach((wall) => {
			elements.wall = Object.assign(elements.wall, {
				x: col,
				y: row,
				size: 1,
				mov: 1,
				pos: World.phase
			});
			let wallSub = new RectangleModel('wall');
			if (wall > 0) {
				if (wall < 5) {
					wallSub.imgX = 80 * (wall - 1);
					wallSub.imgY = 0;
				}
				if (wall >= 5) {
					wallSub.imgX = 80 * (wall - 5);
					wallSub.imgY = 80;
				}
				walls.push(wallSub);
			}

			col++;
			if (col >= columns) {
				row++;
				col = 0;
			}
		});
	}
	nextStage(stairs) {
		let turnOff = this.phase;
		let turnOn = this.phase - 0.1;
		let startStage = this.phase - 0.2;

		if (!resetBtn.pos) {
			player.useStairs(stairs, this.phase);
		}
		if (this.phase === turnOff) {
			if (!this.usingStairs) {
				LightFX.turnOff();
				if (this.changingLapse > 0.1) {
					this.changingLapse -= this.changingSpeed;
				} else {
					this.changingLapse = 0;
					this.usingStairs = true;
				}
			}
			if (this.usingStairs) {
				LightFX.turnOn();
				this.phase = turnOn;
				if (this.changingLapse >= 0 && this.changingLapse < 0.9) {
					this.changingLapse += this.changingSpeed;
				} else {
					this.changingLapse = 1;
				}
			}
		}
		if (this.phase === turnOn) {
			this.phase = startStage;
			this.usingStairs = false;
			this.changingLapse = 1;
			resetBtn.pos = false;
		}
	}

	setEachActiveElementAttribute(element, i) {
		let hasActiveAttribute = false;
		let activeElement = RectangleModel.activeElements[i];
		for (let l in element) {
			if (activeElement) {
				if (l === 'active') {
					hasActiveAttribute = true;
					RectangleModel.activeElements[i][l] = true;
				} else {
					let isSameOrBlockSize =
						l === 'pos' || l === 'stage' ? 'same' : 'blockSize';
					switch (isSameOrBlockSize) {
						case 'same':
							RectangleModel.activeElements[i][l] =
								RectangleModel.setSameValue(element[l]);
							break;
						case 'blockSize':
							RectangleModel.activeElements[i][l] =
								RectangleModel.setValueAccordingBlockSize(
									element[l]
								);
							break;
						default:
							break;
					}
				}
			}
		}
		if (activeElement && !hasActiveAttribute) {
			// console.info(i, RectangleModel.activeElements[i]);
			// delete RectangleModel.activeElements[i].active;
		}
	}

	getCurrentStageData() {
		return stages['stage' + this.savedPhase];
	}

	resetMap() {
		if (this.selectedPhase) {
			boxes.moveToStage();
			this.selectedPhase = false;
		}
		this.currentStage = this.getCurrentStageData();
		for (let i in this.currentStage) {
			let element = this.currentStage[i];
			if (i === 'world') {
				this.set(maps[element.map], element.size);
				this.phase = element.stage;
			} else {
				this.setEachActiveElementAttribute(element, i);
			}
		}
		player.setPositionOnResetMap();
	}
	switchPhase() {
		this.previousPhase = this.phase;
		let stairs;
		let isStageDown = Math.floor(this.phase) === this.phase;
		let isStageUp = Math.floor(this.phase) - this.phase === -0.5;
		if (isStageDown) {
			stairs = 'stageDown';
			this.savedPhase = Math.abs(this.phase) + 1;
		} else if (isStageUp) {
			stairs = 'stageUp';
			this.savedPhase = Math.abs(parseInt(this.phase, 10)) - 1;
		}
		this.savedDirection = stairs || this.savedDirection;

		if (worldIsReadyToReset(this.phase)) {
			this.resetMap();
		}

		this.nextStage(stairs);

		if (this.stageJustChanged()) {
			Game.checkStageComplete();
		}
	}

	stageJustChanged() {
		return (
			this.previousPhase !== this.phase &&
			this.phase === parseInt(this.phase, 10)
		);
	}
}
