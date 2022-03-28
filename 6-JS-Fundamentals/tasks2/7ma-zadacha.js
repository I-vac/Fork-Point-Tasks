function getDimensions(){

    let height = document.documentElement.clientHeight;
    let width = document.documentElement.clientWidth;
    
    document.getElementById("dimensions").innerHTML = "The Height is: "+ height + "<br />" + "The Width is: "+ width;

}