function createPole() {

let pole = document.createElement('div');

document.body.appendChild(pole);

pole.classList.add('pole');

for (let i = 0; i < 625; i++) {

	let excel = document.createElement('div');

	pole.appendChild(excel);

	excel.classList.add('excel');

}

let excel = document.getElementsByClassName('excel');

let x = 1,

	y = 25;

for (let i = 0; i < excel.length; i++) {

	if (x>25) {

		x=1;

		y--;
	}

	excel[i].setAttribute('posX', x);

	excel[i].setAttribute('posY', y);

	x++;

}


	
}

createPole();
