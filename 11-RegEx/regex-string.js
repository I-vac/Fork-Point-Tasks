function ValidateString(string){
    var stringREGEX = /^([a-z]{2})([_][A-Z]{2})?$/ ;
    var result = stringREGEX.test(string);
    return result;

}
console.log(ValidateString('fr_FR'))
console.log(ValidateString('bg'))
console.log(ValidateString('bgr'))
console.log(ValidateString('fr_'))
