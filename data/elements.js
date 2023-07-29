const elements = {
	player: {
		x: 5,
		y: 4,
		size: 0.6,
		spd: 0.2,
		image: 'pj',
		pos: 'down',
		imageTime: 0,
		frames: {
			left: { x: 4, y: 3, walk: 3, push: 8 },
			right: { x: 4, y: 1, walk: 2, push: 6 },
			up: { x: 4, y: 2, walk: 0, push: 7 },
			down: { x: 4, y: 0, walk: 1, push: 5 }
		}
	},
	playerEnd: { x: 8, y: 4.6, w: 1.8, h: 1.8 },
	pointer: {},

	box1: {
		name: 'box1',
		x: 5,
		y: 5,
		size: 0.8,
		stage: 1,
		index: 0,
		image: 'caixa1'
	},
	box2: { name: 'box2', size: 0.8, stage: 5, index: 1, image: 'caixa1' },
	box3: { name: 'box3', size: 0.8, stage: 9, index: 2, image: 'caixa1' },
	boxEnd: { x: 8, y: 4, w: 2.4, h: 2.4, image: 'caixa1' },

	hole1: {
		name: 'hole1',
		x: 5,
		y: 8,
		size: 1,
		index: 0,
		stage: 1,
		image: 'buraco'
	},
	hole2: { name: 'hole2', stage: 5, size: 1, index: 1, image: 'buraco' },
	hole3: { name: 'hole3', stage: 9, size: 1, index: 2, image: 'buraco' },

	wall: { image: 'chan' },

	gate1: { name: 'gate1', size: 1, image: 'portal', index: 0 },
	gate2: { name: 'gate2', size: 1, image: 'portal', index: 1 },
	gate3: { name: 'gate3', size: 1, image: 'portal', index: 2 },

	downStairs: {
		name: 'downStairs',
		x: 7,
		y: 4,
		size: 1,
		pos: 3,
		image: 'escaleira'
	},
	downStairsLight: {
		name: 'downStairsLight',
		x: 7,
		y: 3.5,
		h: 2,
		size: 1,
		image: 'chispa'
	},
	upStairs: { name: 'upStairs', h: 1, image: 'escaleira' },

	lab: { x: 11, y: 9, w: 3, h: 3, image: 'lab1' },
	truck: { x: 10, y: 14, w: 3, h: 5, image: 'camion' },
	resetButton: { x: 0.2, y: 0.2, size: 1, image: 'btnReset' },

	intro1: { w: 8.4, h: 2.16, image: 'logoRESgamesFrames' },
	intro2: { w: 6.08, h: 1.52, image: 'titulo' }
};
