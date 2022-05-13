function ValidateGSM(string){
    var gsmREGEX = /(^(\+359|0))?(\d{6,9})/;
    var result = gsmREGEX.test(string);
    return result;
}
console.log(ValidateGSM('+359888123456'))
console.log(ValidateGSM('029881234'))
console.log(ValidateGSM('+35982502010'))
console.log(ValidateGSM('0878136033'))