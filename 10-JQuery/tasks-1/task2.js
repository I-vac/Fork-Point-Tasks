$(document).ready(function(){
    $('<div></div>').insertAfter('.box:nth-child(1)').addClass('box').addClass('red');
    $('<a href="#" class ="new"> new link </a>').insertAfter('.link3');
    $('.link-list').insertBefore('.box-container');
});