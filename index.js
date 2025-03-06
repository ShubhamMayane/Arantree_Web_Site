//logic to check the this js file is linked with the html file or not
// window.addEventListener("load", function(){

//     //this.alert("welcome to this site");

//});


 







function main()
{
    // alert("main is called");
    //Form validation and submit form logic
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent form from submitting normally
    
    
        // alert("Submit button is pressed");
        
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;
    
        console.log(name + ""+email+""+mobile);
        
    
        // Basic validation
        if (!name || !email || !mobile) {
            alert("All fields are required!");
            return;
        }
    
        // Email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
    
        // Mobile number validation (simple check for 10 digits)
        const mobilePattern = /^[0-9]{10}$/;
        if (!mobilePattern.test(mobile)) {
            alert("Please enter a valid mobile number (10 digits).");
            return;
        }
    
        alert("We will get back to you soon");
    
    // If validation passes, send the form data to the email (via API or backend)
    // sendEmail(name, email, mobile);
    });
    //for just testing purpose
    document.getElementById("heading-2").addEventListener("click",function(event){

        alert("clicked on count 1");
        
    });


}




//logic to check the this js file is linked with the html file or not
 window.addEventListener("load", function(){
          
         main();
});


/*----------------------------------------------------------------------------------------------- */

//Automatic Counter increment logic
    



//     // Helper funnction definitions




    


 /*------------------------------------------------------------------------------------------------------- */










