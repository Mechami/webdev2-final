$().ready(function () {

    $("registrationForm").validate({
        rules: {
            registerName: {
                required: true,
                minlength: 2
            },
            registerLastName: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },
            verifyPassword: {
                required: true,
                minlength: 5,
                equalTo: "#registeredPassword"
            },
            email: {
                required: true,
                email: true
            },


        }






































    });
});