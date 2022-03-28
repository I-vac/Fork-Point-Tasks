let text = document.getElementsByTagName("p")[0].childNodes[0];
console.log(text.nodeValue);
console.log(text.nodeValue="new value");

let getNodeValue = document.getElementsByTagName("div")[1].getAttributeNode("id");
console.log(getNodeValue);

let setNodeValue = document.getElementsByTagName("div")[1].setAttribute("id", "idDIV");;
//console.log(setNodeValue);