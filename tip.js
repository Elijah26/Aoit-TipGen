function calculateTip() {
	var billCost = document.getElementById("billcost").value;
	var serviceQual = document.getElementById("serviceQual").value;
	var numOfPpl = document.getElementById("pplamt").value;

}

if (billCost === "" || serviceQual == 0) {
alert("Please enter values");
return;
} 
	
if (numOfPpl === "" || numOfPpl <= 1) {
	numOfPpl = 1;
	document.getElementById("each").style.display = "none";
} else {
	document.getElementById("each").style.display = "block";	
}

var total = (billCost * serviceQual) / numOfPpl;
//rounds to 2 decimal places
total = Math.round(total * 100) / 100;
//next line allows us to always have 2 digits after decimal point
total = total.toFixed(2);
//DIsplays the tipp
document.getElementById("totalTip").style.display = "block";
document.getElementById("tips").innerHTML = total;

}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("calculate").onclick = function() {
	calculateTip();

};


