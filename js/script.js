document.getElementById("convert-temp").addEventListener("click", function(){
    var s = "Please enter a value in Fahrenheit"
    var input = prompt(s,0);
    var fValues =[];
    while(input != 'x' && input != 'x' ) {
        if(isNaN(input)) {
            s = "Error ! Plaese only enter number!\n" +s;
            input = prompt(s,0);
        } else {
            fValues.push(input);
            input = prompt(s,0);
        }
    }
    writeCelsius(fValues);
});
document.getElementById("convert-weight").addEventListener("click", function(){
     var s = "Please enter a value in Pounds"
    var input = prompt(s,0);
    var pValues =[];
    while(input != 'x' && input != 'x' ) {
        if(isNaN(input)) {
            s = "Error ! Plaese only enter number!\n" +s;
            input = prompt(s,0);
        } else {
            pValues.push(input);
            input = prompt(s,0);
        }
    }
    writeKilos(pValues);
});
document.getElementById("convert-speed").addEventListener("click", function(){
var s = "Please enter a value in Miles per Hour"
    var input = prompt(s,0);
    var mValues =[];
    while(input != 'x' && input != 'x' ) {
        if(isNaN(input)) {
            s = "Error ! Plaese only enter number!\n" +s;
            input = prompt(s,0);
        } else {
            mValues.push(input);
            input = prompt(s,0);
        }
    }
    writeKPH(mValues);
});


function getCelsiusFromFahrenheit(fFahr) {
    var c = 5/ 9* (fFahr -32);
        c = 5/9*(fFahr - 32);
        return c;    
}
function getKilosFromPounds(fPound) {
    var k = parseFloat(fPound);
        k = fPound / 2.2046;
        return k;
}
function getKphFromMph(fMPH) {
    var KPH = parseInt(fMPH);
        KPH = fMPH * 1.609344;
        return KPH;
}
function writeCelsius(aFahrenheit) {
    var s = '<h3>Fahrenheit to Celsius Conversion</h3>';
        s += '<ul>';
        for(var i = 0; i <aFahrenheit.length; i++) {
            s +='<li>';
        s += aFahrenheit[i] + 'in Fahrenheit equals';
        s += getCelsiusFromFahrenheit(aFahrenheit[i]);
        s += 'in Celsius';
        s += '</li>';
        }
        s += '</ul>';
        document.getElementById("result").innerHTML = s;
}
function writeKilos(aPounds) {
    var s = '<h3>Pounds to Kilos Conversion</h3>';
        s += '<ul>';
        for(var i = 0; i <aPounds.length; i++) {
            s +='<li>';
        s += aPounds[i] + 'in Pounds equals';
        s += getKilosFromPounds(aPounds[i]);
        s += 'in Kilos';
        s += '</li>';
        }
        s +='</ul>';
        document.getElementById("result").innerHTML = s;
}
    
function writeKPH(aMPH) {
    var s = '<h3>MPH to KPH Conversion</h3>';
        s += '<ul>';
        for(var i = 0; i <aMPH.length; i++) {
            s +='<li>';
        s += aMPH[i] + 'in MPH equals';
        s += getKphFromMph(aMPH[i]);
        s += 'in KPH';
        s += '</li>';
        }
        s += '</ul>';
        document.getElementById("result").innerHTML = s;
};
    
