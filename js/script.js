//exp1
function showTexts(){
	document.getElementById('st').innerHTML="Hello World";
}

//exp2
function changeText(){
	document.getElementById('ct').innerHTML="Hello There";
}

//exp3
function displayDateTime(){
	document.getElementById('ddt').innerHTML=Date();
}

//exp4
function bulbOn(){
	document.getElementById('bulb').src="images/onbulb.gif";
}
function bulbOff(){
	document.getElementById('bulb').src="images/bulb.gif";
}

//exp5
function changeStyle(){
	document.getElementById('cs').style.color="red";
}

//exp6
function showText(){
	document.getElementById('sh').style.display='block';
	document.getElementById('sh').innerHTML="hello";
}
function hideText(){
	document.getElementById('sh').style.display='none';
}

//exp7
function changeFont(){
	document.getElementById('cf').style.fontSize="30px";
}

//exp8
function checkSum(){
	let x = 5;
	let y = 2;
	let z = x + y;
	document.getElementById("chs").innerHTML = z;
}

//exp9
function checkSub(){
	let x = 5;
	let y = 2;
	let z = x - y;
	document.getElementById("chsb").innerHTML = z;
}

//exp10
function checkMul(){
	let x = 5;
	let y = 2;
	let z = x * y;
	document.getElementById("cm").innerHTML = z;
}

//exp11
function checkDiv(){
	let x = 5;
	let y = 2;
	let z = x / y;
	document.getElementById("cd").innerHTML = z;
}

//exp12
function checkRem(){
	let x = 5;
	let y = 2;
	let z = x % y;
	document.getElementById("cr").innerHTML = z;
}

//exp13
function myFunction(name,job) {
    document.getElementById("pm").innerHTML = "Welcome " + name + ", the " + job + ".";
}

//exp14
function convertDegree(){
	let c = 25;
	let d=c/5;
	let e=9*d;
	let f = e+32;
	document.getElementById("cdg").innerHTML = f;
}

//exp15
function convertCel(){
	let f = 77;
	let d=f-32;
	let e=d/9;
	let c = 5*e;
	document.getElementById("cdf").innerHTML = c;
}
//exp16
function checkInc(){
	let y = 2;
	let z=++y;
	document.getElementById("ci").innerHTML = z;
}

//exp17
function checkDec(){
	let y = 2;
	let z=--y;
	document.getElementById("cdec").innerHTML = z;
}

//exp18
function checkMax(){
document.getElementById("ma").innerHTML =
Math.max(0, 150, 30, 20, -8, -200);
}

//exp19
function checkMin(){
document.getElementById("mi").innerHTML =
Math.min(0, 150, 30, 20, -8, -200);
}

//exp20
function checkAbs(x){
document.getElementById("ab").innerHTML = Math.abs(x);
}