let boldWords = document.getElementsByTagName("strong");

function highlight(){
    for (let i = 0; i < boldWords.length; i++){
        boldWords[i].style.color = "yellow";
    }
}

function normal(){
    for(let i = 0; i < boldWords.length; i++){
        boldWords[i].style.color = "black";
    }
}