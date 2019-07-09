function first_opr() {
	let i;
	i = prompt('Введите первый операнд','');
	let i_num = +i;
	if (isNaN(i_num)){
		alert('Вы ввели некоректные данные, попробуйте еще раз');
		return first_opr();
	}
	return i_num;
}
function second_opr() {
	let j;
	j = prompt('Введите второй операнд','');
	let j_num = +j;
	if (isNaN(j_num)){
		alert('Вы ввели некоректные данные, попробуйте еще раз');
		return second_opr();
	}
	return j_num;
}
function range_action() {
	let m;
	m = prompt('Выберите операцию: +, -, *, /, %','+');
	return m;
}
function calculate() {
		let opr1 = first_opr();
		let opr2 = second_opr();
		let range = range_action();
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
			return calculate();
}
calculate();
