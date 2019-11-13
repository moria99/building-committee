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
               url: "createData/newResidents",
               // the user data 
               data: {
                   apartmentId: $('#apartmentId').val(),
                   firstName: $('#firstName').val(),
                   lastName: $('#lastName').val(),
                   phone1: $('#phone1').val(),
                   phone2: $('#phone2').val(),
                   email: $('#email').val()
               },
               complete: // this function will run if the request is successful
                   function (xhr, status) {
                       // check if there is an error
                       if (status === 'error')
                           alert(xhr.responseText);
                       else
                           alert(xhr.responseText);
                       location.reload();
                       document.getElementById('id01').style.display = 'none';
                   }
           });
       }
   });