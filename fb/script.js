$(document).ready(function(){
    $("#signup-form").validate({
    rules:{

        fname:{
            required:true,
        },
        mailid:{
            required:true,
            email:true
        },
        password:{
            required:true,
            minlength:8
        },
        gender:{
            required:true

        }
    },
    messages:{
        fname:{
            required:"Not entered",
        }

    }

    })
})