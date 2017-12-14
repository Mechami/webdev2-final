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
            minlength: 7
        },
        verifyPassword: {
            required: true,
            minlength: 7,
            equalTo: "#registerPassword"
        },
        registerEmail: {
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
            required: false
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
    },

    messages: {
        registerFirstName: {
            required: "Please enter yur first name",
            minlength: "Please enter atleast 2 characters"
        },
        registerLastName: {
            required: " Please enter your last name",
            minlength: "Please enter atleast 2 characters"
        },
        registerPassword: {
            required: "Please enter your password",
            minlength: "Please enter atleast 7 characters"
        },
        verifyPassword: {
            require: "Please re-enter your password",
            minlength: "Please enter atleast 7 characters",
            equalTo: "Your password do not match"
        },
        registerEmail: {
            required: "Please enter your password",
            email: "Please enter your e-mail",
            minlength: "Please enter atleast 7 chatacters"
        },
        registerUsername: {
            required: "Please enter your username",
            minlength: "Please enter atleast 3 characters"
        },
        registerAddress: {
            required: true,
            minlength: "Please ente atleast 2 characters"
        },
        registerAddress2: {
            required: "second address is not required"
        },
        registerCity: {
            required: "Please enter your city",
            minlength: "Please enter atleast 2 chartacters"
        },
        registerState: {
            required: "Please enter atleast 2 characters"
        },
        registerZip: {
            required: "Please enter your Zip code",
            minlength: "Please enter atleast 5 characters",
            maxlength: "Please enter atleast 5 chatacters",
            digits: "Please enter only Numbers"
        },
        registerCheck: {
            required: "This checkbox is optional"
        }
    }
});

// sing in form
$("#singInForm").validate({
    rules: {
        singInEmail: {
            required: true,
            email: true,
            minlength: 7
        },
        singInPassword: {
            required: true,
            minlength: 7
        }
    },

    messages: {
        singInEmail: {
            required: "Please enter your e-mail",
            email: "Please enter a valid e-mail",
            minlength: "Please enter a minumum of 7 digits"
        },
        singInPassword: {
            required: "Please enter a password",
            minlength: "Please enter atleast 7 chatacters"
        }
    }
});

//Create form
$("#createForm").validate({
    rules: {
        User: {
            required: true,
            minlength: 3
        },
        Title: {
            require: true,
            minlength: 4
        },
        storySumary: {
            require: true,
            minlength: 90,
            maxlength: 200
        },
        completeStory: {
            required: true,
            minlength: 200
        }
    },

    messages: {
        User: {
            required: "Please enter your Usernane",
            minlength: "Please enter atleast 3 characters"
        },
        Title: {
            require: "Please enter your Title",
            minlength: "Please atleast 4 characters"
        },
        storySumary: {
            require: "story sumary is required",
            minlength: "Please enter atlease 90 characters",
            maxlength: "Please enter a Maximum of 200 characters"
        }
    }

});
//Contribute Form
$("#contributeForm").validate({
    rules: {
        User: {
            required: false,
            minlength: 4,
            maxlength: 5
        },
        completeStory: {
            required: true,
            minlength: 50,
            maxlength: 200
        }
    },

    messages: {
        completeStory: {
            requied: "enter your text",
            minlength: "enter atleast 4 characters",
            maxlength: "Enter arMax 200 characters"
        }
    }
});