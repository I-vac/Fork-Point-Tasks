$(document).ready(function(){
    $('button').click(function (event){
        
        let selectedValue = $('.form-control[name="difficulty"]').val();
        $.ajax({
            type: 'GET',
            url: 'index.html',
            data: {value: selectedValue}
        })
        .done(function (responseText){
            $('#difficulty').html('The selected difficulty is: '+ responseText);
        })
        .fail(function (jqXHR , status ,error){
            alert(jqXHR.responseText)
        })
        .always( function (){
            $('h1:first').after('<h1>Thank you</h1>');
        });
    });  
});