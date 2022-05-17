function ValidateDate(string){
    var REGEX= /^(?:(?:19|2[0-9])\d{2})(-)(?:(?:0[1-9])|(?:1[0-2]))(-)(?:0[1-9]|1\d|2[0-8])$|^((?:(?:19|2[0-9])\d{2})(-)(?:(?:(?:0[13578]|1[02])(-)31)|((0[1,3-9]|1[0-2])(-)(29|30))))$|^(?:(?:(?:(?:19|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])))(-)02(-)29)$/;
    var result = string.match(REGEX);
    return result;
}
console.log(ValidateDate('2024-02-29'));
console.log(ValidateDate('2025-02-29'));
console.log(ValidateDate('1948-05-31'));