//logic to check the this js file is linked with the html file or not
// window.addEventListener("load", function(){

//     this.alert("welcome to this site");
// });


window.addEventListener("scroll",function(){

    // const content=document.querySelector("#heading-2");

    // const contentPosition=content.getBoundingClientRect().top


    //this is the code to apply specific class to specific html element on scroll event

                // Select the element to animate
                const animateElement = document.querySelector('#heading-2');

                // Define the amount of scroll required to trigger the animation
                const scrollThreshold = 500; // pixels

                // Function to check scroll position and add/remove the class
                function checkScroll() {
                    
                    
                const scrollPosition = window.scrollY;

                console.log(scrollPosition);
                
               
                // If the user has scrolled more than the threshold, add the 'visible' class
                if (scrollPosition >= scrollThreshold) {
                    animateElement.classList.add('animate__animated', 'animate__flipInX','visible');
                } 
                }

                // Listen to the scroll event
                window.addEventListener('scroll', checkScroll);


});



//logic for the Contact us form validations and sending a email


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

// function sendEmail(name, email, mobile) {
//     // Here you would use an API like EmailJS, or send data to your backend to send an email.

   

//     // Example using EmailJS:
//     emailjs.send("service_46fzrsv", "template_6m2tim6", {
//         name: name,
//         email: email,
//         mobile: mobile,
//         to_email_id:"shubhammayanepaypal@gmail.com"  //ya mail var form details cha mail pathwala jaeel
//     })
//     .then(function(response) {
//         alert("Your message has been sent successfully!");
//     }, function(error) {
//         alert("There was an error sending the message. Please try again.");
//     });
// }
