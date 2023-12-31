/**
 * z-index in each element is according to its sorting order in this file.
 */

var stages = {
	stage1: {
		upStairs: { x: 0, y: 0, w: 0, pos: 1 },
		downStairs: { x: 7, y: 4, w: 1, pos: 3 },
		downStairsLight: { x: 7, y: 3, w: 1, pos: 3 },

		hole1: { x: 5, y: 8, stage: 1 },

		box1: { x: 5, y: 5 },

		world: { map: 'map01', size: 11, stage: 1 },
		stageUp: { player: { x: 6, y: 4 } },
		stageDown: { player: { x: 5, y: 4 }, direction: 'right-down' }
	},
	stage2: {
		upStairs: { x: 8, y: 4, w: 1, pos: 1 },
		downStairs: { x: 8, y: 13, w: 1, pos: 2 },
		downStairsLight: { x: 8, y: 12, pos: 3 },

		hole1: { x: 6, y: 9 },

		box1: { x: 6, y: 7 },

		world: { map: 'map02', size: 17, stage: 2 },
		stageUp: { player: { x: 9, y: 13 }, direction: 'left-up' },
		stageDown: { player: { x: 9, y: 4 }, direction: 'left-down' }
	},
	stage3: {
		upStairs: { x: 9, y: 13, w: 1, pos: 0 },
		downStairs: { x: 11, y: 13, w: 1, pos: 2 },
		downStairsLight: { x: 11, y: 12, w: 1, pos: 3 },

		hole1: { x: 6, y: 11 },

		box1: { x: 5, y: 6 },

		world: { map: 'map03', size: 17, stage: 3 },
		stageUp: { player: { x: 12, y: 13 }, direction: 'right-up' },
		stageDown: { player: { x: 8, y: 13 }, direction: 'left-down' }
	},
	stage4: {
		upStairs: { x: 13, y: 18, w: 1, pos: 0 },
		downStairs: { x: 13, y: 4, w: 1, pos: 3 },
		downStairsLight: { x: 13, y: 3, w: 1, pos: 3 },

		hole1: { x: 5, y: 4 },

		box1: { x: 10, y: 17 },

		world: { map: 'map04', size: 18, stage: 4 },
		stageUp: { player: { x: 12, y: 4 }, direction: 'right-up' },
		stageDown: { player: { x: 12, y: 18 }, direction: 'right-down' }
	},
	stage5: {
		upStairs: { x: 11, y: 19, w: 1, pos: 1 },
		downStairs: { x: 9, y: 6, w: 1, pos: 3 },
		downStairsLight: { x: 9, y: 5, w: 1, pos: 3 },

		hole1: { x: 11, y: 15 },
		hole2: { x: 4, y: 6 },

		box1: { x: 5, y: 17 },
		box2: { x: 6, y: 14 },

		gate1: { x: 7, y: 14, pos: 1, isActive: true },
		gate2: { x: 5, y: 12, pos: 1, isActive: true },

		world: { map: 'map05', size: 18, stage: 5 },
		stageUp: { player: { x: 8, y: 6 }, direction: 'left-up' },
		stageDown: { player: { x: 12, y: 19 }, direction: 'right-down' }
	},
	stage6: {
		upStairs: { x: 10, y: 6, w: 1, pos: 1 },
		downStairs: { x: 7, y: 10, w: 1, pos: 2 },
		downStairsLight: { x: 7, y: 9, w: 1, pos: 3 },

		hole1: { x: 7, y: 8 },
		hole2: { x: 4, y: 3 },

		box1: { x: 13, y: 10 },
		box2: { x: 5, y: 7 },

		gate1: { x: 12, y: 8, isActive: true },
		gate2: { x: 11, y: 9, isActive: true },

		world: { map: 'map06', size: 19, stage: 6 },
		stageUp: { player: { x: 8, y: 10 }, direction: 'left-up' },
		stageDown: { player: { x: 11, y: 6 }, direction: 'left-down' }
	},
	stage7: {
		upStairs: { x: 8, y: 17, w: 1, pos: 0 },
		downStairs: { x: 10, y: 7, w: 1, pos: 2 },
		downStairsLight: { x: 10, y: 6, w: 1, pos: 3 },

		hole1: { x: 12, y: 4 },
		hole2: { x: 13, y: 4 },

		box1: { x: 11, y: 16 },
		box2: { x: 5, y: 6 },

		world: { map: 'map07', size: 18, stage: 7 },
		stageUp: { player: { x: 11, y: 7 }, direction: 'right-up' },
		stageDown: { player: { x: 7, y: 17 }, direction: 'left-down' }
	},
	stage8: {
		upStairs: { x: 6, y: 18, w: 1, pos: 0 },
		downStairs: { x: 4, y: 4, w: 1, pos: 2 },
		downStairsLight: { x: 4, y: 3, w: 1, pos: 3 },

		hole1: { x: 8, y: 9 },
		hole2: { x: 13, y: 6 },

		box1: { x: 6, y: 20 },
		box2: { x: 7, y: 16 },

		gate1: { x: 8, y: 15, isActive: true },
		gate2: { x: 9, y: 16, isActive: true },

		world: { map: 'map08', size: 18, stage: 8 },
		stageUp: { player: { x: 5, y: 4 }, direction: 'right-up' },
		stageDown: { player: { x: 5, y: 18 }, direction: 'left-down' }
	},
	stage9: {
		upStairs: { x: 6, y: 13, w: 1, pos: 0 },
		downStairs: { x: 10, y: 17, w: 1, pos: 3 },
		downStairsLight: { x: 10, y: 16, w: 1, pos: 3 },

		hole1: { x: 8, y: 19 },
		hole2: { x: 8, y: 20 },
		hole3: { x: 7, y: 20 },

		box1: { x: 12, y: 7 },
		box2: { x: 8, y: 8 },
		box3: { x: 5, y: 8 },

		gate1: { x: 8, y: 18, isActive: true },
		gate2: { x: 9, y: 20, isActive: true },
		gate3: { x: 7, y: 19, isActive: true },

		world: { map: 'map09', size: 18, stage: 9 },
		stageUp: { player: { x: 9, y: 17 }, direction: 'right-up' },
		stageDown: { player: { x: 5, y: 13 }, direction: 'right-down' }
	},
	stage10: {
		upStairs: { x: 12, y: 17, w: 1, pos: 1 },
		downStairs: { x: 4, y: 4, w: 1, pos: 2 },
		downStairsLight: { x: 4, y: 3, w: 1, pos: 3 },

		hole1: { x: 10, y: 4 },
		hole2: { x: 12, y: 15 },
		hole3: { x: 8, y: 5 },

		box1: { x: 7, y: 20 },
		box2: { x: 6, y: 20 },
		box3: { x: 5, y: 20 },

		gate1: { x: 12, y: 6, isActive: true },
		gate2: { x: 10, y: 15, isActive: true },
		gate3: { x: 7, y: 5, isActive: true },

		world: { map: 'map10', size: 18, stage: 10 },
		stageUp: { player: { x: 5, y: 4 }, direction: 'left-up' },
		stageDown: { player: { x: 13, y: 17 }, direction: 'left-down' }
	},
	stage11: {
		upStairs: { x: 6, y: 4, w: 1, pos: 0 },
		downStairs: { x: 5, y: 17, w: 1, pos: 2 },
		downStairsLight: { x: 5, y: 16, w: 1, pos: 3 },

		hole1: { x: 11, y: 10 },
		hole2: { x: 12, y: 9 },
		hole3: { x: 12, y: 11 },

		box1: { x: 11, y: 5 },
		box2: { x: 12, y: 16 },
		box3: { x: 10, y: 6 },

		gate1: { x: 9, y: 10, isActive: true },
		gate2: { x: 12, y: 7, isActive: true },
		gate3: { x: 12, y: 13, isActive: true },

		world: { map: 'map11', size: 18, stage: 11 },
		stageUp: { player: { x: 6, y: 17 }, direction: 'right-up' },
		stageDown: { player: { x: 5, y: 4 }, direction: 'left-down' }
	},
	stage12: {
		upStairs: { x: 5, y: 12, w: 1, pos: 0 },
		downStairs: { x: 0, y: 2, w: 0, pos: 0 },

		hole1: { x: 10, y: 13 },
		hole2: { x: 0, y: 0 },
		hole3: { x: 0, y: 0 },

		box1: { x: 10, y: 7 },
		box2: { x: 0, y: 1 },
		box3: { x: 0, y: 2 },

		world: { map: 'map12', size: 18, stage: 12 },
		stageUp: { direction: 'right-up' },
		stageDown: { player: { x: 4, y: 12 } }
	}
};
