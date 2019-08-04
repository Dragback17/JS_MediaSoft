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

function createCoor() {
		
	let posX = Math.round(Math.random() * (25 - 3) + 3);

	let posY = Math.round(Math.random() * (25 - 1) + 1);

	return [posX, posY];

}

function createSnake() {
	
	let snakeCoor = createCoor();

	let snakeBody = [document.querySelector('[posX = "' + snakeCoor[0] + '"][posY = "' + snakeCoor[1] + '"]'), 
document.querySelector('[posX = "' + (snakeCoor[0] - 1) + '"][posY = "' + snakeCoor[1] + '"]'), 
document.querySelector('[posX = "' + (snakeCoor[0] - 2) + '"][posY = "' + snakeCoor[1] + '"]')];

	for (let i =0; i < snakeBody.length; i++) {

		snakeBody[i].classList.add('snake');

	}

	function snakeMove() {
	
		let snakeCoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];

		snakeBody[snakeBody.length-1].classList.remove('snake');

		snakeBody.pop();

		if (snakeCoordinates[0] < 25) {

			snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] + 1) + 
				'"][posY = "' + snakeCoordinates[1] + '"]'));

		} else {

			snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' + snakeCoordinates[1] + '"]'));
		}

		for (let i = 0; i < snakeBody.length; i++) {

			snakeBody[i].classList.add('snake');

		}

	}

	let interval = setInterval(snakeMove, 300);

}
	
createSnake();

function createEat() {

	let eatCoor = createCoor();

	let eat = document.querySelector('[posX = "' + eatCoor[0] + '"][posY = "' + eatCoor[1] + '"]');

	while (eat.classList.contains('snakeBody')) {

		let eatCoor = createCoor();

		let eat = document.querySelector('[posX = "' + eatCoor[0] + '"][posY = "' + eatCoor[1] + '"]');

	}

	eat.classList.add('eat');
	
}

createEat();





