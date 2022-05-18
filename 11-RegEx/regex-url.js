function ExtractUrl(string){
var REGEX= /^(?:(?<Host>[^\:]*)\:\/\/){1}(?:(?<Username>[^\:\@]*)(?:\:([^\@]*))?\@)?(?:(?<Domain>[^\/\:]*(?:[a-zA-Z0-9]+(?:\-*[a-zA-Z0-9])*\.)+[a-zA-Z0-9]{2,63})){1}(?:\:(?<Port>[0-9]*))?(?<Path>\/[^\?#.]*(?=.*?\/)\/)?((?<Filename>[^\?#]*)(?<Extension>\w*[.]\w{3,4}))?(?:\?(?<Query>[^#]*))?(?:#(.*))?$/
var result = string.match(REGEX);
return result;
}
console.log(ExtractUrl('ftp://johnsmith@my.domain.com:8080/path/to/resource/file.txt'))
console.log(ExtractUrl('http://example.com/page.html'))
console.log(ExtractUrl('http://example'))

