$(document).ready(function(){
    $('button').click(function (event){

        event.preventDefault();
        let selectedValue = $('.form-control[name="difficulty"]').val();
        $.ajax({
            type: 'GET',
            url: `https://sugoku.herokuapp.com/board?difficulty=${selectedValue}`,
            dataType: 'json'
        })
        .done(function (responseText){
           // console.log(responseText);//inicializirashta funkciq  //div elementi i 1 za red s 9 diva i 9 za kolona //onchange
           // alert('The selected difficulty is: '+ selectedValue);
            for (let i = 0; i < 9; i++ ){
                    $('<div>1</div>').addClass('row').appendTo('.game-container')
                    for (let j = 0; j < 9; j++){
                        $('<div>2</div>').addClass('col').appendTo('.game-container .row')
                    }
            }
            
            

        })
        .fail(function (jqXHR , status ,error){
            alert(jqXHR.responseText)
        })
        .always( function (jqXHR, status){
            alert('The request was complete');
        });
    });  
});