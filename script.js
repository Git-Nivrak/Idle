var money = 0;
var increment = 1;
var cost = 10;

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function func(){
	money += increment/1000;
	setTimeout(func,1);
}

function update() {
	document.getElementById("mn").innerHTML = Math.round(money);
	document.getElementById("sp").innerHTML = increment;
	document.getElementById("cs").innerHTML = cost;
	setTimeout(update,10);
}

function incrs() {
if (money > cost) { 
	money -= cost;
	increment += 1 + increment ** 1.3;
	cost = 10 + Math.round(increment ** 1.2)
}

}

func();
update();


