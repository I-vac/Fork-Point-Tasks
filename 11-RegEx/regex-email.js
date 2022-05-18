function ValidateEmail(string){
    var emailREGEX= /^\w+([\.\+]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    var result= emailREGEX.test(string);
    return result;
}
console.log(ValidateEmail('john_smith@example.info'))
console.log(ValidateEmail('test001+simple@gmail.com'))
console.log(ValidateEmail('ivan.petrov@abv.bg'))
console.log(ValidateEmail('my_unique_mail.01+comment@sub.domain.example.com'))