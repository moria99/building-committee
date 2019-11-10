        // listen to click event of the submit button
        $('#submitBtn').click(function (e) {
            // make sure the form is not submitted
            e.preventDefault();
            // run the form validations
            document.getElementById('myForm').checkValidity();
            // check if the form is valid
            if (document.getElementById('myForm').reportValidity()) {
                // form is valid, create a post request
                $.ajax({
                    type: "post",
                    url: "loginReg/login",
                    // the user data 
                    data: {
                        userName: $('#userName').val(),
                        password: $('#password').val()
                    },
                    complete: // this function will run if the request is successful
                       
                    function (xhr, status) {
                            // check if there is an error
                            if (status === 'error')
                                alert(xhr.responseText);  //it's error to accsses to xhr, why? (becouse i call back...) 
                            else
                                alert(xhr.responseText);
                        }
                });
            }
        });