//registration form
$("#regiForm").validate({
    rules: {
        registerFirstName: {
            required: true,
            minlength: 2
        },
        registerLastName: {
            required: true,
            minlength: 2
        },
        registerPassword: {
            required: true,
            minlength: 5
        },
        verifyPassword: {
            required: true,
            minlength: 5,
            equalTo: "#registerPassword"
        },
        email: {
            required: true,
            email: true,
            minlength: 7
        },
        registerUsername: {
            required: true,
            minlength: 3
        },
        registerAddress: {
            required: true,
            minlength: 2
        },
        registerAddress2: {
            required: false,
        },
        registerCity: {
            required: true,
            minlength: 3
        },
        registerState: {
            required: true
        },
        registerZip: {
            required: true,
            minlength: 5,
            maxlength: 5,
            digits: true
        },
        registerCheck: {
            required: false
        }
    }
});

// sing in form
$("singInForm").validate({
    rules: {
        // i still do not unerstand the validation for the singInForm, 
        // I will be saving time, by waithing and ask to luck.

        //I think that this is all i will do for the thurkey is giving break.

    }
});