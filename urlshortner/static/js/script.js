$(document).on('submit','#post-form',function(e){e.preventDefault();
    $.ajax({
        type:'POST',
        url:'/create',
        data:{
            link:$('#link').val(),
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
        },
        success:function(){

        },
    });
});