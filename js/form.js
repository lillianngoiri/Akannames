function gh() {
    var month = document.getElementById("month").value;
    var MM = parseInt(month);
    var day = document.getElementById("day").value;
    var DD = parseInt(day);
    var year = document.getElementById("year").value;
    var YY = parseInt(year);
    var centuary = document.getElementById("centuary").value;
    var CC = parseInt(centuary);

    var maleNames = [
         "Kwame","Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];

        
    var femaleNames = [
        "Ama", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"];

    var day = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
     day = Math.round(day);

     if (MM < 1 || MM > 12 || MM == 2 && DD > 29) {
            alert("INVALID MONTH!!!");
        }
        else if (DD < 1 || DD > 31) {
            alert("INVALID DAY!!!");
        }

    if (document.getElementById("male").checked) {
         alert("Your Akan name is " + maleNames[day]);
    }
    else if (document.getElementById("female").checked) {
        alert("Your Akan name is " + femaleNames[day]);
    }

}
