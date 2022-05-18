function ValidatePassword(string){

    var passwordREGEX= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]?)(?=.*\s?).{8,64}$/;
    var result = passwordREGEX.test(string);
    return result;
}
console.log(ValidatePassword('1234'))
console.log(ValidatePassword('Abvdf12@'))
console.log(ValidatePassword('Agv dad2r'))
console.log(ValidatePassword('abcdepst'))
