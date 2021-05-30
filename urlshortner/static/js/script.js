$(document).on('submit','#post-form',function(e){e.preventDefault();
    $.ajax({
        type:'POST',
        url:'/create',
        data:{
            link:$('#link').val(),
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
        },
        success:function(data){
            $("textarea").html("localhost:8000/"+data)

        },
    });
});
function myFunction() {
    var copyText = document.getElementById("h5");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    console.log("coppied successfully");
}