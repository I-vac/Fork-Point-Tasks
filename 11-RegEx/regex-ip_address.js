function ValidateAddress(string){
    var REGEX= /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}$/;
    var result = string.match(REGEX);
    return result;
}
console.log(ValidateAddress('255.255.255.225'));
console.log(ValidateAddress('255.225.255.345'));
console.log(ValidateAddress('0.0.0.0'));
console.log(ValidateAddress('192.168.0.1'));
console.log(ValidateAddress('255.255.255.2255'));
