function FormatNames(string){
var REGEX = /^(\w+(-\w+)? ?)((.* )(?!$))?(\w+(-\w+)?)$/;

var result = string.replace(REGEX, "$5, $1");

return result;
}
console.log(FormatNames('ivan petrov dimitrov'));
