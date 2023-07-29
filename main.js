/*****************************************\
 **      SET INITAL PHASE (line 8)      **
 **      Intro = false                  **
 **      1st phase = 1                  **
\*****************************************/

const World = new WorldModel();
World.setInitialPhase(5);
const cv = document.getElementById('cv');
const cx = cv.getContext('2d');
const FPS = 45;
const Rectangle = RectangleModel;

const Title = new TitleModel();
const LightFX = new LightFXModel();
const Camera = new CameraModel();
const Game = new GameModel();
const frame = Camera.setFrame({ blockSize: 50, imageSize: 80 });

const Key = new KeyModel();
var player = PlayerModel.create('player');

var holes = RectangleModel.getNode('hole', 3, (el) => {
	return el.stage && el.stage <= World.phase;
});
var boxes = BoxModel.getNode();
var gates = RectangleModel.getNode('gate', 3, (el) => {
	return el.isActive;
});
var interruptores = helpers.getRectangleNodeModels('switch', 3);

var Stairs = new StairsModel();
var downStairs = Stairs.down;
var upStairs = Stairs.up;
var stairSpark = Stairs.spark;

var activeElements = [];

var lab = Rectangle.create('lab');
var camion = Rectangle.create('truck');
var camionEndImg = helpers.createImage('camion');
var autoriaImg = helpers.createImage('end/autoria');

var beepBox = helpers.createSound('beepBox');
var arrastres = [
	helpers.createSound('Arrastre'),
	helpers.createSound('Arrastre2'),
	helpers.createSound('Arrastre3')
];
var pasos = [helpers.createSound('Paso'), helpers.createSound('Paso2')];
var caixaCae = helpers.createSound('Caixa-cae');
var powerUp = helpers.createSound('Powerup');
var abrirPortal = helpers.createSound('Abrir-porta');
var pecharPortal = helpers.createSound('Pechar-porta');
var sons = [
	...arrastres,
	caixaCae,
	powerUp,
	abrirPortal,
	pecharPortal,
	...pasos
];

sons.forEach((sound) => {
	sound.volume = 0.5;
});

arrastres.forEach((pulling) => {
	pulling.volume = 0.3;
});

beepBox.volume = 1;

var walls = [];
var setArrayMap = maps.map01;

// Interface
var resetBtn = new Rectangle.create('resetButton');
var Pointer = new PointerModel();

document.addEventListener('keydown', function (evt) {
	for (let i in Key) {
		if (Key[i].id === evt.code) {
			Key[i].pressed = true;
		}
	}
});

document.addEventListener('keyup', function (evt) {
	for (let i in Key) {
		if (Key[i].id === evt.code) {
			Key[i].pressed = false;
		}
	}
});

cv.addEventListener('click', function (e) {
	Pointer.clic(e);
});

cv.addEventListener('mousemove', function (e) {
	Pointer.move(e);
});
