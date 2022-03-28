let newParagraph = document.createElement("p");
document.body.appendChild(newParagraph);


//Use the insertBefore method to add a node.
let text1 = document.createElement("div");

let text2 = document.getElementById("content");

let parent = text2.parentNode;

parent.insertBefore(text1, text2);

//Use the removeChild method to remove a node.
let element = document.getElementById("header");
let nestedElement = document.getElementById("title");
let deleteElement = element.removeChild(nestedElement);

//Use the replaceChild method to replace a node.
let content = document.getElementById("content");
let newContent = document.createElement("h1");
newContent.textContent = "LOREMIPSUM";
content.replaceChild(newContent, content.firstElementChild);