// function FormatNames(string){
//     var namesREGEX=/(?<FirstName>^\w+\-?\w+)(\w*)(?<LastName>\w+)$/;
//     var result = string.match(namesREGEX);
//     console.log(result)
//     return result; 
    
// }
// console.log(FormatNames('ivan petrov dimitrov'));

function FormatNames(string){
var REGEX = /^(\w+(-\w+)? ?)((.* )(?!$))?(\w+(-\w+)?)$/;

var result = string.replace(REGEX, "$5, $1");

return result;
}
console.log(FormatNames('ivan petrov dimitrov'));
