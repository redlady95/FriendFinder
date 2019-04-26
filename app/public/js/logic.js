//Execute POST after click on button submit. 
 $("#submit").on("click", function(event) { 
     event.preventDefault(); 
    
     //Validate that all the fields were answered. 
     function validateForm() { 
       var isValid = true; 
    
       //Run though each question to check the answer was selected. 
       $(".form-control").each(function() { 
         if ($(this).val() === "Select an option") { 
           isValid = false; 
         } 
       }); 
       return isValid; 
     } 
    
     //IF all the validation is positive then create the POST. 
     if (validateForm()) { 
    
       //Creates object with all the answers from the user. 
       var userData = { 
         name: $("#survey_name").val(), 
         photo: $("#survey_link").val(), 
         scores: [ 
           $("#survey_q1").val(), 
           $("#survey_q2").val(), 
           $("#survey_q3").val(), 
           $("#survey_q4").val(), 
           $("#survey_q5").val(), 
           $("#survey_q6").val(), 
           $("#survey_q7").val(), 
           $("#survey_q8").val(), 
           $("#survey_q9").val(), 
           $("#survey_q10").val() 
         ] 
       }; 
    
       //Call the POST and sends object. 
       $.post('/api/friends', userData) 
         //Receives confirmation of POST + best match user and image. 
         .done(function(data) { 
    
    
           $('#user-match').html(data.matchName); 
           $("#image-match").attr("src", data.matchImage); 
           // Pop open the modal dialog 
           $('#results-modal').modal('toggle'); 
         }); 
     } 
     //IF validation wasn't succesful display alert. 
     else { 
       alert("Please fill out all fields before submitting.") 
     } 
   }) 
