$(document).ready(function (){
    $('.box-container .box').click(function(){
        $(this).hide();
    })   

    $('#checkbox').on('change',function(){
        if($(this).prop('checked')){
                $('.circle-container .circle').animate({
                    right : '85%'
                
            }, {duration : 2000 })
        }else{
            $('.circle-container .circle').animate({
                right : '0%'
                
            }, {duration: 3000})
        }

    })


})