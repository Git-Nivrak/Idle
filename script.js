var money = new Decimal(10);
var firstDimensions = new Decimal(0);
var firstDimensionMultiplier = new Decimal(1);
var firstDimensionCost = new Decimal(10);
var firstDimensionFinished = false;

function func(){
	money = money.plus(firstDimensionMultiplier.multiply(firstDimensions).divide(250));
	setTimeout(func,4);
}

function update() {
	if (money.exponent > 4) {
		document.getElementById("mn").innerHTML = "You have " + money.mantissa.toFixed(2) + "e" + money.exponent + " Paperclips";
	}
	else {
		document.getElementById("mn").innerHTML = "You have "+ money.floor() + " Paperclips";
	}
	if (firstDimensionMultiplier.exponent > 4) {
		document.getElementById("1stdimmult").innerHTML = "First Dimension x" + firstDimensionMultiplier.mantissa.toFixed(2) + "e" + firstDimensionMultiplier.exponent + "         <button onclick='buyFirstDimension()'>Cost: " + firstDimensionCost.mantissa + "e" + firstDimensionCost.exponent.toFixed(2) + "</button>";
	}else {
		document.getElementById("1stdimmult").innerHTML = "First Dimension x" + firstDimensionMultiplier + "";
		document.getElementById("firstDimensionCst").innerHTML = "Cost: " + firstDimensionCost;
	}
	setTimeout(update,1000);
}

function buyFirstDimension() {
	if (firstDimensions.lessThan(new Decimal(10))) {
		if (money.greaterThanOrEqualTo(new Decimal(10))) {
			money = money.sub(new Decimal(10));
			firstDimensions = firstDimensions.add(new Decimal(1));
		}
	}else if (firstDimensions == new Decimal(10) && firstDimensions.lessThanOrEqualTo(new Decimal(10))) {
		money = money.sub(new Decimal(10));
		firstDimensions = firstDimensions.add(new Decimal(1));
		firstDimensionCost = firstDimensionCost.multiply(firstDimensionCost);
		firstDimensionMultiplier = firstDimensionMultiplier.multiply(2);
		firstDimensionFinished = true;
	}else {
		if (firstDimensionFinished == true && money.greaterThanOrEqualTo(firstDimensionCost)) {
			firstDimensionFinished = false;
			money = money.sub(firstDimensionCost)
			firstDimensions = firstDimensions.add(new Decimal(1));
		}else {
			if (money.greaterThanOrEqualTo(firstDimensionCost) && firstDimensions.divide(10) != new Decimal(0)) {
				money = money.sub(firstDimensionCost)
				firstDimensions = firstDimensions.add(new Decimal(1));
			}else if (money.greaterThanOrEqualTo(firstDimensionCost)) {
				money = money.sub(firstDimensionCost)
				firstDimensions = firstDimensions.add(new Decimal(1));
				firstDimensionCost = firstDimensionCost.multiply(firstDimensionCost);
				firstDimensionFinished = true;
			}
		}
	}
}

func();
update();


