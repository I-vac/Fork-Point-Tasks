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
           // console.log(responseText);//inicializirashta funkciq  //div elementi i 1 za red s 9 diva i 9 za kolona //onchange v inputa//event//handle//chislata
           // alert('The selected difficulty is: '+ selectedValue);
           //da mahna nulite// poletata da priemat samo chisla i da sa 1 simvol ot 1 do 9//input type
            for (let i = 0; i < 9; i++ ){
                    let $row = $(`<div></div>`).addClass('sudokuRow')
                    
                    for (let j = 0; j < 9; j++){
                        $(`<div><input
                            type="number"
                            min="1"
                            max="10"
                            value="${responseText.board[i][j]}"
                            ${!responseText.board[i][j] ? '':'disabled'} /></div>`).addClass('sudokuCol').appendTo($row)
                      
                    }

                    $row.appendTo('.game-container')
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