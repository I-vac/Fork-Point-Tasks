// var string1=("fr");
// var string2=("en_US");
// var string3=( "bg_BG");
// var string4=("en_UK");
// var string5=( "de");
// var string6=("de_SW");
// var result = string1.match(/^([a-z]{2})([_])?([A-Z]{2})?$/);
// var result1 = string2.match(/^([a-z]{2})([_])?([A-Z]{2})?$/);
// var result2 = string3.match(/^([a-z]{2})([_])?([A-Z]{2})?$/);
// var result3 = string4.match(/^([a-z]{2})([_])?([A-Z]{2})?$/);
// var result4 = string5.match(/^([a-z]{2})([_])?([A-Z]{2})?$/);
// var result5 = string6.match(/^([a-z]{2})([_])?([A-Z]{2})?$/);
// console.log(result);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);

function ValidateString(){
    var string = ('fr');
    var stringREGEX = /^([a-z]{2})([_])?([A-Z]{2})?$/ ;
    var result = stringREGEX.test(string);
    console.log(result);
    return result;
}

ValidateString()