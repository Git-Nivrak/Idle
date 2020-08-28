var money = new Decimal(0);
var increment = new Decimal(1);
var cost = new Decimal(10);


function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function func(){
	money = money.plus(increment.divide(1000));
	setTimeout(func,1);
}

function update() {
	document.getElementById("mn").innerHTML = money.round();
	document.getElementById("sp").innerHTML = increment;
	document.getElementById("cs").innerHTML = cost;
	setTimeout(update,10);
}

function incrs() {
if (Decimal.compare(money, cost) > 0) { 
	money = money.sub(cost);
	increment = new Decimal(1).plus(increment.pow(1.3)).round();
	cost = new Decimal(10).plus(increment.pow(1.2)).round() ;
}

}

func();
update();


