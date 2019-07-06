function first_opr() {
	let i;
	i = prompt('Введите первый операнд','');
	let i_num = +i;
	return i_num;
}
function second_opr() {
	let j;
	j = prompt('Введите второй операнд','');
	let j_num = +j;
	return j_num;
}
function range_action() {
	let m;
	m = prompt('Выберите операцию: +, -, *, /, %','+');
	return m;
}
function calculate(opr1,opr2,range) {
	if (isNaN(opr1)||isNaN(opr2)){
		alert('Вы ввели некоректные данные, попробуйте еще раз');
	}else
		switch(range){
			case'+':
			alert(opr1 + opr2);
			break;
			case'-':
			alert(opr1 - opr2);
			break;
			case'*':
			alert(opr1 * opr2);
			break;
			case'/':
			alert(opr1 / opr2);
			break;
			case'%':
			alert(opr1 % opr2);
			break;
			default:
			alert('Я таких операций не знаю');
		}
}
let opr1 = first_opr();
let opr2 = second_opr();
let range = range_action();
calculate(opr1,opr2,range);
