var cv = null,
	cx = null;
var timing = 30;
var sombraTitulo = 1;
var timeTitulo = 100;
var cam = new camera();
var b = new encadre(50, 80); // bloque.size // bloque.imgSize

var pj = new rect(
	b.size * 5 + 10,
	b.size * 4 + 10,
	b.size * 0.6,
	b.size * 0.6,
	b.size * 0.2,
	false,
	'aba'
);
var tEsq = 65,
	tDer = 68,
	tArr = 87,
	tAba = 83;
var fEsq = 37,
	fDer = 39,
	fArr = 38,
	fAba = 40;
var lastPress = null,
	pressing = [];

var buraco1 = new rect(b.size * 5, b.size * 8, b.size, b.size);
var buraco2 = new rect(0, 0, 0, b.size);
var buraco3 = new rect(0, 0, 0, b.size);
var buracos = [buraco1, buraco2, buraco3];
var caixa1 = new rect(
	b.size * 5 + 5,
	b.size * 5 + 5,
	b.size * 0.8,
	b.size * 0.8,
	0,
	0,
	1
);
var caixa2 = new rect(b.size * 1, 0, 0, b.size * 0.8, 0, 0, 5);
var caixa3 = new rect(b.size * 1, 0, 0, b.size * 0.8, 0, 0, 9);
var caixas = [caixa1, caixa2, caixa3];
var escaleiraDS = new rect(b.size * 7, b.size * 4, b.size, b.size, 0, 0, 3);
var escaleiraUS = new rect(0, 0, 0, b.size);
var chispaDS = new rect(b.size * 7, b.size * 3, 0, b.size * 2);
var portal1 = new rect(0, 0, 0, b.size);
var portal2 = new rect(0, 0, 0, b.size);
var portal3 = new rect(0, 0, 0, b.size);
var portais = [portal1, portal2, portal3];
var interruptor1 = new rect(0, 0, 0, b.size);
var interruptor2 = new rect(0, 0, 0, b.size);
var interruptor3 = new rect(0, 0, 0, b.size);
var interruptores = [interruptor1, interruptor2, interruptor3];
var todo = [
	caixa1,
	caixa2,
	caixa3,
	buraco1,
	buraco2,
	buraco3,
	portal1,
	portal2,
	portal3,
	escaleiraDS,
	escaleiraUS
];

var lab = new rect(b.size * 11, b.size * 9, b.size * 3, b.size * 3);
var labImg = new Image();
labImg.src = 'img/lab1.png';
var camion = new rect(b.size * 9, b.size * 12, b.size * 3, b.size * 5);
var camionImg = new Image();
camionImg.src = 'img/camion.png';
var camionEndImg = new Image();
camionEndImg.src = 'img/end/camion.png';
var autoriaImg = new Image();
autoriaImg.src = 'img/end/autoria.png';

var pjImg = new Image();
(pjImg.src = 'img/pj.png'), (pjImgTime = 0);
var caixaImg = new Image();
caixaImg.src = 'img/caixa1.png';
var escaleiraImg = new Image();
escaleiraImg.src = 'img/escaleira.png';
var chispaDSImg = new Image();
chispaDSImg.src = 'img/chispa.png';
var buracoImg = new Image();
buracoImg.src = 'img/buraco.png';
var chanImg = new Image();
(chanImg.src = 'img/chan.png'), (sombraChan = 1);
sombraChanCont = 0;
var portalImg = new Image();
portalImg.src = 'img/portal.png';

var beepBox = new Audio();
beepBox.src = 'audio/beepBox.mp3';
var arrastre1 = new Audio();
arrastre1.src = 'audio/Arrastre.mp3';
var arrastre2 = new Audio();
arrastre2.src = 'audio/Arrastre2.mp3';
var arrastre3 = new Audio();
arrastre3.src = 'audio/Arrastre3.mp3';
var arrastres = [arrastre1, arrastre2, arrastre3];
var caixaCae = new Audio();
caixaCae.src = 'audio/Caixa-cae.mp3';
var powerUp = new Audio();
powerUp.src = 'audio/Powerup.mp3';
var abrirPortal = new Audio();
abrirPortal.src = 'audio/Abrir-porta.mp3';
var pecharPortal = new Audio();
pecharPortal.src = 'audio/Pechar-porta.mp3';
var paso1 = new Audio();
paso1.src = 'audio/Paso.mp3';
var paso2 = new Audio();
paso1.src = 'audio/Paso2.mp3';
var pasos = [paso1, paso2];
var pasosCont = 0;
var sons = [
	arrastre1,
	arrastre2,
	arrastre3,
	caixaCae,
	powerUp,
	abrirPortal,
	pecharPortal,
	paso1,
	paso2
];
for (var i = 0; i < sons.length; i++) {
	sons[i].volume = 0.5;
}
for (var i = 0; i < arrastres.length; i++) {
	arrastres[i].volume = 0.3;
}
beepBox.volume = 1;

var chan = [],
	chanEsq = [],
	chanDer = [],
	chan1 = [],
	chans = [];
var chan5 = [],
	chan6 = [],
	chan7 = [];
var setArrayMap = map01;
var tempoCambio = 1;
var dir = false;
var fase = false; // Para cargar intro: false || 1ª fase = 1 || Para empezar noutra fase: -x.2 - Ex: -1.2 ou -4.2

var worldWidth = 0,
	worldHeight = 0,
	elapsedTime = 0;
var tamanhoWindowW = 0;
var tamanhoWindowH = 0;
var tWW = 0;
var tWH = 0;
var todalasVar;

var mouseX = 0;
var mouseY = 0;

// Interface
var resetBtn = new rect(10, 10, 50, 50, 0, 0, false);
var resetBtnImg = new Image();
resetBtnImg.src = 'img/btnReset.png';
var cursor = new rect(0, 0, b.size * 0.4, b.size * 0.4);
var cursorImg = new Image();
cursorImg.src = 'img/cursor.png';

function init() {
	console.log(600 % 8);
	cv = document.getElementById('cv');
	cx = cv.getContext('2d');

	// Para que a resolución quede nítida é necesario facer que o tamaño do canvas
	// sexa múltiplo de 8 (nº de pixels reais por cada pixel no xogo).
	// tamanhoWindow = tamaño da pantalla - resto da división - 8 (este 8 é para que
	// non se encha a pantalla ata os bordes e non aparezan scrollbars)

	// tamanhoWindowW = window.innerWidth - (window.innerWidth%8) -8;
	// tamanhoWindowH = window.innerHeight - (window.innerHeight%8) -8;
	// tWW = tamanhoWindowW%8;
	// tWH = tamanhoWindowH%8;

	if (window.innerWidth >= window.innerHeight) {
		tamanhoWindowW = 800;
		tamanhoWindowH = 600;
	} else {
		tamanhoWindowW = 600;
		tamanhoWindowH = 800;
	}

	cv.width = tamanhoWindowW;
	cv.height = tamanhoWindowH;

	setWorld(setArrayMap, 11, b.size);

	if (fase == false) {
		introA();
	}
	if (fase != false) {
		act();
	}
}
// ACT --------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
function act() {
	// TÍTULO
	if (sombraTitulo > 0) {
		timeTitulo--;
	}

	if (timeTitulo <= 90) {
		sombraTitulo = timeTitulo / 9;
	}

	// Interface
	if (cursor.mov > 0) {
		cursor.mov--;
	}

	// Comezar BSO
	if (fase != false && fase != -12) {
		beepBox.play();
	}

	// IR A ENDING
	if (caixa1.cae(buraco1) && fase == 12) {
		fase = -12;
		resetBtn.width = 0;
		ending();
	}

	// CONSOLA
	todalasVar = [
		fase,
		'x: ' + Math.floor(pj.x / b.size),
		'y: ' + Math.floor(pj.y / b.size),
		Math.floor(mouseX / b.size),
		Math.floor(mouseY / b.size),
		elapsedTime,
		pj.mov,
		tamanhoWindowW,
		tamanhoWindowH,
		tWW,
		tWH,
		sombraTitulo,
		timeTitulo,
		resetBtn.x,
		resetBtn.y,
		resetBtn.width,
		resetBtn.height,
		cursor.mov,
		chispaDS.mov,
		chispaDS.width,
		escaleiraDS.pos,
		aNegro,
		aNegroCont,
		chispaDS.mov
	];

	// chamar chispa escaleiras
	if (caixa1.pos == fase + 1 && caixa2.pos > fase && caixa3.pos > fase) {
		if (chispaDS.mov < 14) {
			powerUp.play();
		}
		chispaDS.width = b.size;
		chispaDS.mov++;
		chispaDS.spd = fase;
		chispaDS.pos = Math.floor(chispaDS.mov / 2);
		if (chispaDS.mov > 26) {
			chispaDS.mov = 14;
		}
	}
	if (chispaDS.spd != fase) {
		chispaDS.mov = 0;
		chispaDS.width = 0;
	}

	// Tempo transcorrido
	elapsedTime++;
	if (elapsedTime >= 800) {
		elapsedTime = 0;
	}

	if (fase > 0) {
		// Activación do movemento do pj
		pjMov();
		// Parpadeo da pantalla (luz FX)
		if (fase > 0) {
			luzFx();
		}
	}

	// Cambio de fase
	cambioFase();

	// Caixa cae polo buraco
	for (var i = 0; i < caixas.length; i++) {
		if (caixas[i].cae(buracos[i])) {
			caixas[i].caixaCae();
		}
	}

	// Colocar lab
	if (
		fase == 11 ||
		fase == -10.2 ||
		fase == -12.7 ||
		fase == -11.5 ||
		fase == -11
	) {
		lab.pos = 0;
		lab.width = b.size * 3;
		lab.x = b.size * 11;
		lab.y = b.size * 9;
		camion.width = 0;
	} else if (fase == 12 || fase == -11.2 || fase == -12.5 || fase == -12) {
		lab.pos = 3;
		lab.width = b.size * 3;
		lab.x = b.size * 9;
		lab.y = b.size * 6;
		camion.width = b.size * 3;
	} else {
		lab.width = 0;
		camion.width = 0;
	}

	// Eventos de cámara
	cam.focus(pj.x + pj.width / 2, pj.y + pj.height / 2);

	paint();
	setTimeout(function () {
		act();
	}, timing);
}

// PAINT --------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
function paint() {
	cx.clearRect(0, 0, cv.width, cv.height);
	cx.fillStyle = '#202020';
	cx.fillRect(0, 0, cv.width, cv.height);

	// Debuxar buraco
	for (var i = 0; i < buracos.length; i++) {
		var num1 = i;
		if (fase <= 0) {
			cx.globalAlpha = sombraChan;
			if (fase > -12) {
				if (pasosCont == 0) {
					paso1.play();
					pasosCont = 1;
				} else {
					paso2.play();
					pasosCont = 0;
				}
			}
		}
		if (fase == 11 || fase == -11 || fase == -11.5) {
			buracos[i].fillAnime(
				buracoImg,
				cx,
				cam,
				(~~(elapsedTime / 3) % 8) * b.imgSize,
				b.imgSize * (num1 + 3),
				b.imgSize,
				b.imgSize
			);
		} else if (fase == 12 || fase == -12.2 || fase == -12.5) {
		} else {
			buracos[i].fillAnime(
				buracoImg,
				cx,
				cam,
				(~~(elapsedTime / 3) % 4) * b.imgSize,
				b.imgSize * num1,
				b.imgSize,
				b.imgSize
			);
		}
	}

	// Debuxar Caixa

	for (var i = 0; i < caixas.length; i++) {
		var num1 = i * 2;
		var num2 = i * 2 + 1;
		if (caixas[i].anim == undefined && fase == 12) {
			caixa1.fillAnime(
				caixaImg,
				cx,
				cam,
				(~~(elapsedTime / 3) % 8) * b.imgSize,
				b.imgSize * 6,
				b.imgSize,
				b.imgSize
			);
		}
		if (caixas[i].anim == undefined) {
			caixas[i].fillAnime(
				caixaImg,
				cx,
				cam,
				(~~(elapsedTime / 3) % 8) * b.imgSize,
				b.imgSize * num1,
				b.imgSize,
				b.imgSize
			);
		} else {
			caixas[i].fillAnime(
				caixaImg,
				cx,
				cam,
				caixas[i].anim * b.imgSize,
				b.imgSize * num2,
				b.imgSize,
				b.imgSize
			);
		}
	}
	cx.globalAlpha = 1;

	// Debuxar escaleiras
	cx.globalAlpha = sombraChan;
	escaleiraUS.fillAnime(
		escaleiraImg,
		cx,
		cam,
		b.imgSize * escaleiraUS.pos,
		0,
		b.imgSize,
		b.imgSize
	);
	escaleiraDS.fillAnime(
		escaleiraImg,
		cx,
		cam,
		b.imgSize * escaleiraDS.pos,
		0,
		b.imgSize,
		b.imgSize
	);
	cx.globalAlpha = 1;

	// Debuxar pj
	if (fase == -12.1) {
		pj.width = 400;
		pj.height = 240;
		pj.fillAnime(
			camionEndImg,
			cx,
			cam,
			0,
			(~~(elapsedTime / 3) % 6) * b.imgSize * 3,
			b.imgSize * 5,
			b.imgSize * 3
		);
		cx.drawImage(autoriaImg, (cv.width - 420) / 2, b.size * 9, 420, 128);
	} else {
		debuxarPj('aba', 4, 0, 1, 'pushAba', 5);
		debuxarPj('arr', 4, 2, 0, 'pushArr', 7);
		debuxarPj('der', 4, 1, 2, 'pushDer', 6);
		debuxarPj('esq', 4, 3, 3, 'pushEsq', 8);

		pj.fillAnime(pjImg, cx, cam, b.anim, pjImgTime, 80, 80);
	}

	// Debuxar chan
	cx.fillStyle = '#202020';
	cx.globalAlpha = sombraChan;
	pintarChan(chan, chanImg, 0, 0);
	pintarChan(chanEsq, chanImg, 80, 0);
	pintarChan(chanDer, chanImg, 160, 0);
	pintarChan(chan1, chanImg, 240, 0);
	pintarChan(chan5, chanImg, 0, 80);
	pintarChan(chan6, chanImg, 80, 80);
	pintarChan(chan7, chanImg, 160, 80);

	//Debuxar portais
	for (var i = 0; i < portais.length; i++) {
		portais[i].fillAnime(
			portalImg,
			cx,
			cam,
			(~~(elapsedTime / 3) % 8) * b.imgSize,
			b.imgSize * 1,
			b.imgSize,
			b.imgSize
		);
	}

	// Debuxar lab
	lab.fillAnime(
		labImg,
		cx,
		cam,
		b.imgSize * lab.pos,
		0,
		b.imgSize * 3,
		b.imgSize * 3
	);

	cx.globalAlpha = 1;

	// Debuxar camión
	camion.fillAnime(camionImg, cx, cam, 0, 0, b.imgSize * 3, b.imgSize * 5);

	// Chispa DS
	if (caixa1.pos == fase + 1 && caixa2.pos > fase && caixa3.pos > fase) {
		if (escaleiraDS.pos == 2) {
			chispaDS.fillAnime(
				chispaDSImg,
				cx,
				cam,
				chispaDS.pos * b.imgSize,
				0,
				b.imgSize,
				b.imgSize * 2
			);
		} else if (escaleiraDS.pos == 3) {
			chispaDS.fillAnime(
				chispaDSImg,
				cx,
				cam,
				chispaDS.pos * b.imgSize,
				b.imgSize * 2,
				b.imgSize,
				b.imgSize * 2
			);
		}
	}

	// Interface
	cx.drawImage(
		resetBtnImg,
		0,
		0,
		b.imgSize,
		b.imgSize,
		resetBtn.x,
		resetBtn.y,
		resetBtn.width,
		resetBtn.height
	);
	if (cursor.mov > 0) {
		cx.drawImage(
			cursorImg,
			(~~(elapsedTime / 3) % 4) * b.imgSize,
			0,
			b.imgSize,
			b.imgSize,
			cursor.x - b.size * 0.2,
			cursor.y - b.size * 0.2,
			b.size * 0.4,
			b.size * 0.4
		);
	}

	// Ending

	cx.globalAlpha = aNegro;
	cx.fillStyle = '#202020';
	cx.fillRect(0, 0, cv.width, cv.height);
	cx.globalAlpha = 1;

	// Título
	cx.globalAlpha = sombraTitulo;
	cx.drawImage(tituloImg, 0, 0, 304, 76, intro2.x, intro2.y, 304, 76);
	cx.globalAlpha = 1;

	// Consola
	cx.font = '15px Courier';
	cx.fillStyle = '#ffff00';
	for (var i = 0; i < todalasVar.length; i++) {
		// cx.fillText(todalasVar[i],10,i*15+70);
	}
}

// LIBREBRÍAS --------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

function clic(event) {
	mouseX = event.clientX;
	mouseY = event.clientY;
	if (cursor.intersects(resetBtn) && fase > -12) {
		fase -= fase * 2 - 1;
		resetBtn.pos = true;
	}
}

function pjMov() {
	if (pressing[tDer]) {
		pj.mov = 'der';
		pj.andar(pj.spd, 'der');
		if (pj.mov != false) pj.pos = pj.mov;
	} else if (pressing[tEsq]) {
		pj.mov = 'esq';
		pj.andar(-pj.spd, 'esq');
		if (pj.mov != false) pj.pos = pj.mov;
	}
	if (pressing[tArr]) {
		pj.mov = 'arr';
		pj.andar(-pj.spd, 'arr');
		if (pj.mov != false) pj.pos = pj.mov;
	} else if (pressing[tAba]) {
		pj.mov = 'aba';
		pj.andar(pj.spd, 'aba');
		if (pj.mov != false) pj.pos = pj.mov;
	}
	if (
		!pressing[tDer] &&
		!pressing[tEsq] &&
		!pressing[tArr] &&
		!pressing[tAba]
	) {
		pj.mov = false;
		pj.anim = false;
	}
}

function rect(x, y, width, height, spd, mov, pos, draw) {
	this.x = x == null ? 0 : x;
	this.y = y == null ? 0 : y;
	this.width = width == null ? 0 : width;
	this.height = height == null ? this.width : height;
	this.spd = spd == null ? 0 : spd;
	this.mov = mov == null ? 0 : mov;
	this.pos = pos == null ? 0 : pos;
	this.draw = draw == null ? 0 : draw;
}
rect.prototype.fill = function () {
	if (cam != null) {
		cx.fillRect(this.x - cam.x, this.y - cam.y, this.width, this.height);
	}
};
function pintarChan(chanN, img, x, y) {
	for (var i = 0; i < chanN.length; i++) {
		chanN[i].fillAnime(img, cx, cam, x, y, 80, 80);
	}
}

function debuxarPj(
	posicion1,
	tamanho1,
	tamanho2,
	tamanho3,
	posicion2,
	tamanho4
) {
	if (pj.mov == false && pj.pos == posicion1) {
		pjImgTime = b.imgSize * tamanho1;
		b.anim = b.imgSize * tamanho2;
	}
	if (pj.mov == posicion1) {
		pjImgTime = b.imgSize * tamanho3;
		b.anim = (~~(elapsedTime / 3) % 4) * b.imgSize;
		if (pj.anim == posicion2) {
			pjImgTime = b.imgSize * tamanho4;
			b.anim = (~~(elapsedTime / 3) % 4) * b.imgSize;
		}
	}
}

// AVDERTENCIA!! As imaxes rompen polas esquinas, hai que cambiar os param ó chamala.
// Ex: chanN[i].fillAnime(img,cx,cam,x+1,y,78,80);
// En vez de ...(img,cx,cam,x,y,80,80);
// Polo tanto: imgX+1 e ingW-2
rect.prototype.fillAnime = function (img, cx, cam, imgX, imgY, imgW, imgH) {
	if (cam != null) {
		cx.drawImage(
			img,
			imgX,
			imgY,
			imgW,
			imgH,
			this.x - cam.x,
			this.y - cam.y,
			this.width,
			this.height
		);
	}
};
rect.prototype.intersects = function (rectangle) {
	if (rectangle != null) {
		return (
			this.x < rectangle.x + rectangle.width &&
			this.x + this.width > rectangle.x &&
			this.y < rectangle.y + rectangle.height &&
			this.y + this.height > rectangle.y
		);
	}
};
rect.prototype.cae = function (rectangle) {
	if (rectangle != null) {
		return (
			this.x >= rectangle.x &&
			this.x <= rectangle.x + 10 &&
			this.y >= rectangle.y &&
			this.y <= rectangle.y + 10
		);
	}
};
rect.prototype.caixaCae = function () {
	if (this.anim == undefined) this.anim = 0;
	if (this.anim >= 0 && this.anim < 9) {
		caixaCae.play();
		this.anim++;
	}
	if (this.anim == 9) {
		this.anim = undefined;
		this.width = 0;
		this.x = 0;
		this.pos++;
	}
};
rect.prototype.andar = function (spd, pos) {
	//ARR ABA --------------------------------------------------------------------------
	if (this.mov == 'aba' || this.mov == 'arr') {
		this.y += spd;
		for (var s = 0; s < caixas.length; s++) {
			if (this.intersects(caixas[s])) {
				var r = Math.floor(Math.random() * 3);
				arrastres[r].play();
				this.y -= spd * 0.5;
				caixas[s].y += spd * 0.5;
				for (var i = 0; i <= chans.length; i++) {
					if (caixas[s].intersects(chans[i])) {
						arrastres[r].pause();
						caixas[s].y -= spd * 0.5;
						if (this.mov == 'aba') {
							this.y = caixas[s].y - this.height;
						} else if (this.mov == 'arr') {
							this.y = caixas[s].y + caixas[s].height;
						}
						this.mov = false;
					}
				}
				for (var i = 0; i <= todo.length; i++) {
					var obx1 = 0;
					var obx2 = 0;
					var obx3 = 0;
					if (s == 0) {
						obx1 = caixa1;
						obx2 = buraco1;
						obx3 = portal1;
					}
					if (s == 1) {
						obx1 = caixa2;
						obx2 = buraco2;
						obx3 = portal2;
					}
					if (s == 2) {
						obx1 = caixa3;
						obx2 = buraco3;
						obx3 = portal3;
					}
					if (caixas[s].intersects(todo[i])) {
						if (
							caixas[s] == obx1 &&
							todo[i] != obx2 &&
							todo[i] != caixas[s] &&
							todo[i] != obx3
						) {
							arrastres[r].pause();
							caixas[s].y -= spd * 0.5;
							if (this.mov == 'aba') {
								this.y = caixas[s].y - this.height;
							} else if (this.mov == 'arr') {
								this.y = caixas[s].y + caixas[s].height;
							}
							this.mov = false;
						}
					}
				}
				if (this.mov == 'aba') {
					this.anim = 'pushAba';
				}
				if (this.mov == 'arr') {
					this.anim = 'pushArr';
				}
			}
		}

		for (var s = 0; s < buracos.length; s++) {
			if (this.intersects(buracos[s])) {
				if (this.mov == 'aba') {
					this.y = buracos[s].y - this.height;
				} else if (this.mov == 'arr') {
					this.y = buracos[s].y + buracos[s].height;
				}
				this.mov = false;
			}
		}

		for (var i = 0; i <= chans.length; i++) {
			if (this.intersects(chans[i])) {
				if (this.mov == 'aba') {
					this.y = chans[i].y - this.height;
				} else if (this.mov == 'arr') {
					this.y = chans[i].y + chans[i].height;
				}
				this.mov = false;
			}
		}
	}

	// ESQ DER ----------------------------------------------------------------------------
	if (this.mov == 'der' || this.mov == 'esq') {
		this.x += spd;
		for (var s = 0; s < caixas.length; s++) {
			if (this.intersects(caixas[s])) {
				var r = Math.floor(Math.random() * 3);
				arrastres[r].play();
				pj.x -= spd * 0.5;
				caixas[s].x += spd * 0.5;
				for (var i = 0; i <= chans.length; i++) {
					if (caixas[s].intersects(chans[i])) {
						arrastres[r].pause();
						caixas[s].x -= spd * 0.5;
						if (this.mov == 'der') {
							this.x = caixas[s].x - this.width;
						} else if (this.mov == 'esq') {
							this.x = caixas[s].x + caixas[s].width;
						}
						this.mov = false;
					}
				}
				for (var i = 0; i <= todo.length; i++) {
					var obx1 = 0;
					var obx2 = 0;
					var obx3 = 0;
					if (s == 0) {
						obx1 = caixa1;
						obx2 = buraco1;
						obx3 = portal1;
					}
					if (s == 1) {
						obx1 = caixa2;
						obx2 = buraco2;
						obx3 = portal2;
					}
					if (s == 2) {
						obx1 = caixa3;
						obx2 = buraco3;
						obx3 = portal3;
					}
					if (caixas[s].intersects(todo[i])) {
						if (
							caixas[s] == obx1 &&
							todo[i] != obx2 &&
							todo[i] != caixas[s] &&
							todo[i] != obx3
						) {
							arrastres[r].pause();
							caixas[s].x -= spd * 0.5;
							if (this.mov == 'der') {
								this.x = caixas[s].x - this.width;
							} else if (this.mov == 'esq') {
								this.x = caixas[s].x + caixas[s].width;
							}
							this.mov = false;
						}
					}
				}
				if (this.mov == 'der') {
					this.anim = 'pushDer';
				}
				if (this.mov == 'esq') {
					this.anim = 'pushEsq';
				}
			}
		}

		for (var s = 0; s < buracos.length; s++) {
			if (this.intersects(buracos[s])) {
				if (this.mov == 'der') {
					this.x = buracos[s].x - this.width;
				} else if (this.mov == 'esq') {
					this.x = buracos[s].x + buracos[s].width;
				}
				this.mov = false;
			}
		}

		for (var i = 0, l = chans.length; i <= chans.length; i++) {
			if (this.intersects(chans[i])) {
				if (this.mov == 'der') {
					this.x = chans[i].x - this.width;
				} else if (this.mov == 'esq') {
					this.x = chans[i].x + chans[i].width;
				}
				this.mov = false;
			}
		}
	}
	// ABRIR PORTAIS ----------------------------------------------------------------------------------
	for (var i = 0; i < caixas.length; i++) {
		if (
			pj.intersects(interruptores[i]) ||
			caixas[i].intersects(interruptores[i])
		) {
			if (portais[i].width > 0) {
				pecharPortal.play();
			}
			portais[i].x = 0;
			portais[i].width = 0;
		} else if (
			!pj.intersects(interruptores[i]) &&
			!caixas[i].intersects(interruptores[i])
		) {
			if (
				fase == 5 &&
				interruptores[i] != interruptor3 &&
				portais[i].width <= 0
			) {
				pecharPortal.play();
			}
			portais[i].x = portais[i].mov;
			portais[i].width = portais[i].pos;
		}
	}
};

function setWorld(map, columns, blockSize) {
	var col = 0;
	var row = 0;
	chans.length = 0;
	chan.length = 0;
	chanEsq.length = 0;
	chanDer.length = 0;
	chan1.length = 0;
	chan5.length = 0;
	chan6.length = 0;
	chan7.length = 0;
	for (var i = 0, l = map.length; i < l; i++) {
		if (map[i] == 1) {
			chans.push(
				new rect(
					col * blockSize,
					row * blockSize,
					blockSize,
					blockSize,
					0,
					1
				)
			);
			chan.push(
				new rect(
					col * blockSize,
					row * blockSize,
					blockSize,
					blockSize,
					0,
					1
				)
			);
		}
		if (map[i] == 2) {
			chans.push(
				new rect(
					col * blockSize,
					row * blockSize,
					blockSize,
					blockSize,
					0,
					1
				)
			);
			chanEsq.push(
				new rect(
					col * blockSize,
					row * blockSize,
					blockSize,
					blockSize,
					0,
					1
				)
			);
		}
		if (map[i] == 3) {
			chans.push(
				new rect(
					col * blockSize,
					row * blockSize,
					blockSize,
					blockSize,
					0,
					1
				)
			);
			chanDer.push(
				new rect(
					col * blockSize,
					row * blockSize,
					blockSize,
					blockSize,
					0,
					1
				)
			);
		}
		if (map[i] == 4) {
			chans.push(
				new rect(
					col * blockSize,
					row * blockSize,
					blockSize,
					blockSize,
					0,
					1
				)
			);
			chan1.push(
				new rect(
					col * blockSize,
					row * blockSize,
					blockSize,
					blockSize,
					0,
					1
				)
			);
		}
		if (map[i] == 5) {
			chan5.push(
				new rect(
					col * blockSize,
					row * blockSize,
					blockSize,
					blockSize,
					0,
					1
				)
			);
		}
		if (map[i] == 6) {
			chan6.push(
				new rect(
					col * blockSize,
					row * blockSize,
					blockSize,
					blockSize,
					0,
					1
				)
			);
		}
		if (map[i] == 7) {
			chan7.push(
				new rect(
					col * blockSize,
					row * blockSize,
					blockSize,
					blockSize,
					0,
					1
				)
			);
		}
		if (map[i] == 8) {
			chans.push(
				new rect(
					col * blockSize,
					row * blockSize,
					blockSize,
					blockSize,
					0,
					1
				)
			);
		}

		col++;

		if (col >= columns) {
			row++;
			col = 0;
		}
	}

	worldWidth = columns * blockSize;
	worldHeight = row * blockSize;
}
function faseMov(num1, num2, num3, pjMov, pjS1, pjS2) {
	// faseMov(-1, -1.1, "der", pj.spd, pj.spd);
	if (fase == num1 || fase == num2) {
		if (resetBtn.pos == false) {
			pj.mov = pjMov;
			pj.x += pjS1 / 2;
			pj.y += pjS2 / 4;
		}
		if (fase == num1) {
			if (dir == false) {
				if (tempoCambio > 0.1) {
					tempoCambio -= 0.03;
				} else {
					tempoCambio = 0;
					dir = true;
				}
				if (sombraChan > 0.1) {
					sombraChan -= 0.1;
				} else {
					sombraChan = 0.01;
				} // Cambiar isto se da un salto de luz
			} else {
				fase = num2;
				if (tempoCambio >= 0 && tempoCambio < 0.9) {
					tempoCambio += 0.03;
				} else {
					tempoCambio = 1;
				}
			}
		} else {
			fase = num3;
			dir = false;
			tempoCambio = 1;
			resetBtn.pos = false;
		}
	}
}

function resetMap(
	pjX,
	pjY,
	usX,
	usY,
	usW,
	usP,
	dsX,
	dsY,
	dsW,
	dsP,
	c1X,
	c1Y,
	c1W,
	c1P,
	c2X,
	c2Y,
	c2W,
	c2P,
	c3X,
	c3Y,
	c3W,
	c3P,
	b1X,
	b1Y,
	b1W,
	b2X,
	b2Y,
	b2W,
	b3X,
	b3Y,
	b3W,
	p1X,
	p1Y,
	p1W,
	p2X,
	p2Y,
	p2W,
	p3X,
	p3Y,
	p3W,
	sMap,
	mSize,
	f
) {
	pj.x = b.size * pjX + 10;
	pj.y = b.size * pjY + 10;
	escaleiraUS.x = b.size * usX;
	escaleiraUS.y = b.size * usY;
	escaleiraUS.width = b.size * usW;
	escaleiraUS.pos = usP;
	escaleiraDS.x = b.size * dsX;
	escaleiraDS.y = b.size * dsY;
	escaleiraDS.width = b.size * dsW;
	chispaDS.x = escaleiraDS.x;
	chispaDS.y = escaleiraDS.y - b.size;
	chispaDS.width = 0;
	escaleiraDS.pos = dsP;
	if (caixa1.pos == c1P) {
		caixa1.x = b.size * c1X + 5;
		caixa1.y = b.size * c1Y + 5;
		caixa1.width = b.size * c1W;
	} else {
		caixa1.x = b.size * 1;
		caixa1.y = b.size * 1;
		caixa1.width = b.size * 0;
	}
	if (caixa2.pos == c2P) {
		caixa2.x = b.size * c2X + 5;
		caixa2.y = b.size * c2Y + 5;
		caixa2.width = b.size * c2W;
	} else {
		caixa2.x = b.size * 1;
		caixa2.y = b.size * 1;
		caixa2.width = b.size * 0;
	}
	if (caixa3.pos == c3P) {
		caixa3.x = b.size * c3X + 5;
		caixa3.y = b.size * c3Y + 5;
		caixa3.width = b.size * c3W;
	} else {
		caixa3.x = b.size * 1;
		caixa3.y = b.size * 1;
		caixa3.width = b.size * 0;
	}
	buraco1.x = b.size * b1X;
	buraco1.y = b.size * b1Y;
	buraco1.width = b.size * b1W;
	buraco2.x = b.size * b2X;
	buraco2.y = b.size * b2Y;
	buraco2.width = b.size * b2W;
	buraco3.x = b.size * b3X;
	buraco3.y = b.size * b3Y;
	buraco3.width = b.size * b3W;
	portal1.x = b.size * p1X;
	portal1.y = b.size * p1Y;
	portal1.width = b.size * p1W;
	portal1.mov = portal1.x;
	portal1.pos = portal1.width;
	portal2.x = b.size * p2X;
	portal2.y = b.size * p2Y;
	portal2.width = b.size * p2W;
	portal2.mov = portal2.x;
	portal2.pos = portal2.width;
	portal3.x = b.size * p3X;
	portal3.y = b.size * p3Y;
	portal3.width = b.size * p3W;
	portal3.mov = portal3.x;
	portal3.pos = portal3.width;
	interruptor1.x = portal1.x;
	interruptor1.y = portal1.y;
	interruptor1.width = portal1.width;
	interruptor2.x = portal2.x;
	interruptor2.y = portal2.y;
	interruptor2.width = portal2.width;
	interruptor3.x = portal3.x;
	interruptor3.y = portal3.y;
	interruptor3.width = portal3.width;
	setWorld(sMap, mSize, b.size);
	fase = f;
}

function encadre(size, imgSize, anim) {
	this.size = size == null ? 0 : size; // Tamaño das paredes e todo en xeral
	this.imgSize = imgSize == null ? 0 : imgSize; // Tamaño real de cada imaxe da animación
	this.anim = anim == null ? 0 : anim; // Nº de frames por animación
}

function luzFx() {
	if (sombraChanCont == 0) {
		sombraChan += 0.01;
	} else if (sombraChanCont == 1) {
		sombraChan -= 0.01;
	}
	if (sombraChan >= 1 && sombraChanCont == 0) {
		sombraChanCont = 1;
		sombraChan = 1;
	}
	if (sombraChan > 0.65 && sombraChan <= 0.7 && sombraChanCont == 1) {
		sombraChanCont = 0;
	} else if (sombraChan <= 0.65) {
		sombraChan += 0.05;
	}
}

function camera() {
	this.x = 0;
	this.y = 0;
}
camera.prototype.focus = function (x, y) {
	this.x = x - cv.width / 2;
	this.y = y - cv.height / 2;
};

// TÍTULO
function introB() {
	cx.fillStyle = '#222';
	cx.fillRect(0, 0, cv.width, cv.height);
	intro2.x = (tamanhoWindowW - intro2.width) / 2;
	intro2.y = (tamanhoWindowH - intro2.height) / 3;
}

// Interface

function mouseMove(event) {
	cursor.x = event.clientX;
	cursor.y = event.clientY;
	cursor.mov = 30;
}

document.addEventListener(
	'keydown',
	function (evt) {
		lastPress = evt.keyCode;
		pressing[evt.keyCode] = true;
	},
	false
);

document.addEventListener(
	'keyup',
	function (evt) {
		pressing[evt.keyCode] = false;
	},
	false
);

window.addEventListener('load', init, false);
