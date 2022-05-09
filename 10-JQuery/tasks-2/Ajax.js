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
          
            for (let i = 0; i < 9; i++ ){
                
                    let $row = $(`<div></div>`).addClass('sudokuRow')
                    
                    for (let j = 0; j < 9; j++){
                        $(`<div><input
                            type="number"
                            min="1"
                            max="9"
                            value="${responseText.board[i][j] || ''}"
                            ${!responseText.board[i][j] ? '':'disabled'} /></div>`).addClass('sudokuCol').appendTo($row)
                      
                    }
                    $row.appendTo('.game-container')
            }
          //  ${responseText.board[i][j] ? 0 : ''}

        })
        .fail(function (jqXHR , status ,error){
            alert(jqXHR.responseText)
        })
        .always( function (jqXHR, status){
            alert('The request was complete');
        });
    });  
});