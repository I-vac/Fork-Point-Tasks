$(document).ready(function () {
    $('ul.list li').click(function(){
        let text = $(this).text();
        alert(text);
    });

    $('ul.list li').hover(
        function(){
            $(this).css('color','red')
    },  function(){
            $(this).css('color','black')
    });

    $('div.box-container div').click(function(){
    $(this).toggleClass('red');
    })

    $('button').click(function(){
        $('.task-body.task3 .box').toggleClass('red');
    })
    

})