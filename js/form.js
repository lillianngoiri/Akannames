var month = document.getElementById("month").value;
var MM = parseInt(month);
var day = document.getElementById("day").value;
var DD = parseInt(day); 
var year = document.getElementById("year").value;
var YY = parseInt(year);
var centuary = document.getElementById("centuary").value;
var CC = parseInt(centuary);

var maleNames = [
     "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];


var femaleNames = [
     "Akosua", "Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

var day = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

