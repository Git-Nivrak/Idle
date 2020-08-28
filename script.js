

var mn = 0;
var inc = 1;
var cst = 10;

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function func(){
	mn += inc/1000;
	setTimeout(func,1);
}

function update() {
	document.getElementById("mn").innerHTML = Math.round(mn);
	document.getElementById("sp").innerHTML = inc;
	document.getElementById("cs").innerHTML = cst;
	setTimeout(update,10);
}

function incrs() {
if (mn => cst) { 
	mn -= cst;
	inc += 1 + increments ** 1.3;
	cst = 10 + Math.round(inc ** 1.2)
}
if (inc => 100) { 
	document.body.innerHTML = "Bruh you're bored";
}

}

func();
update();


