class KeyModel {
	constructor() {
		this.left = this.getKey('KeyA', 'left');
		this.right = this.getKey('KeyD', 'right');
		this.up = this.getKey('KeyW', 'up');
		this.down = this.getKey('KeyS', 'down');
	}

	getKey(id, name) {
		let self = {
			id: id,
			name: name,
			move: name,
			pressed: false
		};
		return self;
	}

	noMovementKeyPressed() {
		return (
			!this.right.pressed &&
			!this.left.pressed &&
			!this.up.pressed &&
			!this.down.pressed
		);
	}
}
