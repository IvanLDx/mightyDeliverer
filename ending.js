var aNegro = 0;
var aNegroCont = 0;
var aNegroDir = true;
var pjEnd = new RectangleModel('playerEnd');
var caixaEnd = new RectangleModel('boxEnd');
var caixaEndImg = new Image();
caixaEndImg.src = 'img/end/caixa.png';

function ending() {
	if (aNegroCont < 50 && aNegroDir == true) {
		aNegroCont++;
	} else if (aNegroCont >= 50 && aNegroDir == true) {
		aNegroDir = false;
		elsapsedTime = 0;
		faseMov(-12, -12, -12, 'right', player.spd, -player.spd);
		if (World.phase == -12) {
			World.resetMap(
				0,
				0, //pj
				0,
				0,
				0,
				0, //US
				0,
				0,
				0,
				0, //DS
				0,
				0,
				0,
				0, //caixa1
				0,
				0,
				0,
				0, //caixa2
				0,
				0,
				0,
				0, //caixa3
				0,
				0,
				0, //buraco1
				0,
				0,
				0, //buraco2
				0,
				0,
				0, //buraco3
				0,
				0,
				0, //portal1
				0,
				0,
				0, //portal2
				0,
				0,
				0, //portal3
				map13,
				0,
				-12.1 //setWorld
			);
		}

		cursor.w = 0;
	} else if (aNegroCont > 0 && aNegroDir == false) {
		aNegroCont--;
	}
	if (aNegroDir == true) {
		aNegro = aNegroCont / 50;
	}
	if (aNegroDir == false) {
		aNegro = aNegroCont / 25;
		paintEnd();
		if (pjEnd.x < 400) {
			pjEnd.x += 8;
			pjEnd.pos = 0;
		} else {
			pjEnd.pos = 1;
		}
	}

	setTimeout(function () {
		ending();
	}, timing);
}

function paintEnd() {}
