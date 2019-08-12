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

function createEat() {

	let eatCoor = createCoor();

	let eat = document.querySelector('[posX = "' + eatCoor[0] + '"][posY = "' + eatCoor[1] + '"]');		

	while (eat.classList.contains('snakeBody')) {

		let eatCoor = createCoor();

		let eat = document.querySelector('[posX = "' + eatCoor[0] + '"][posY = "' + eatCoor[1] + '"]');

	}

	eat.classList.add('eat');

	return eat;

}

let eat1 = createEat();

function createSnake() {
	
	let snakeCoor = createCoor();

	let snakeBody = [document.querySelector('[posX = "' + snakeCoor[0] + '"][posY = "' + snakeCoor[1] + '"]'), 
document.querySelector('[posX = "' + (snakeCoor[0] - 1) + '"][posY = "' + snakeCoor[1] + '"]'), 
document.querySelector('[posX = "' + (snakeCoor[0] - 2) + '"][posY = "' + snakeCoor[1] + '"]')];

	for (let i =0; i < snakeBody.length; i++) {

		snakeBody[i].classList.add('snake');

	}

	let direction = "right";

window.addEventListener('keydown', function (e) {


		if (e.keyCode == 37 && direction != 'right'){

			direction = 'left';

		}
		else if (e.keyCode == 38 && direction != 'down'){
			direction = 'up';

		}
		else if (e.keyCode == 39 && direction != 'left'){

			direction = 'right';

		}
		else if (e.keyCode == 40 && direction != 'up'){

			direction = 'down';

		}
	});

	function snakeMove() {

		let snakeCoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];

		snakeBody[snakeBody.length-1].classList.remove('snake');

		snakeBody.pop();

		if (direction == 'right') {

			if (snakeCoordinates[0] < 25) {

			snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] + 1) + 
				'"][posY = "' + snakeCoordinates[1] + '"]'));

			} else {

				snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' + snakeCoordinates[1] + '"]'));
			}

		}   else if (direction == 'left') {

			if (snakeCoordinates[0] > 1) {

			snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] - 1) + 
				'"][posY = "' + snakeCoordinates[1] + '"]'));

			} else {

				snakeBody.unshift(document.querySelector('[posX = "25"][posY = "' + snakeCoordinates[1] + '"]'));
			}

		}   else if (direction == 'up') {

			if (snakeCoordinates[1] < 25) {

			snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + 
				(+snakeCoordinates[1] + 1) + '"]'));

			} else {

				snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "1"]'));
			}

		}   else if (direction == 'down') {

			if (snakeCoordinates[1] > 1) {

			snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0] + '"][posY = "' + 
				(+snakeCoordinates[1] - 1) + '"]'));

			} else {

				snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordinates[0]  + '"][posY = "25"]'));
			}

		}

		if (snakeBody[0].getAttribute('posX') == eat1.getAttribute('posX') && 
			snakeBody[0].getAttribute('posY') == eat1.getAttribute('posY')) {

			eat1.classList.remove('eat');

			let x = snakeBody[snakeBody.length - 1].getAttribute('posX');

			let y = snakeBody[snakeBody.length - 1].getAttribute('posY');

			snakeBody.push(document.querySelector('[posX = "' + x + '"][posY = "' + y + '"]'));

			eat1 = createEat();

			}
		

		for (let i = 0; i < snakeBody.length; i++) {

			snakeBody[i].classList.add('snake');

		}

	}

	let interval = setInterval(snakeMove, 300);

}
	
createSnake();






