
        //DOM element for the automatic counter logic
        const counterContainer=document.getElementById("services-section-2-container");
        const counterDiv1 = document.getElementById("count-1")
        const counterDiv2 = document.getElementById("count-2")
    
        //DOM element for the form submit logic 
        // variables definition section 
        /*variables for automatic counter logic */
        let counter1 = 0;
        let counter2 = 0;
        let interval1;
        let interval2;
        const targetNumber1 = 70; // Set the target number you want to count up to
        const targetNumber2 = 26;// Set the target number you want to count up to
    
        
            // Function to start counting
        function startCounter() {
     
       
            // Reset counter if it's already running
            clearInterval(interval1);
            clearInterval(interval2);
    
            //following 2 setInterval methods gets called asynchronously i.e ekach veli
            //for counter 1
    
            interval1 = setInterval(function() {
                counter1++;
                counterDiv1.innerHTML = "+"+counter1+"%";
        
                // Stop the counter when it reaches the target number
                if (counter1 >= targetNumber1) {
                    clearInterval(interval1);
                }
            }, 10); // Increment every 50ms for smooth counting
    
    
            //for counter 2
            interval2=setInterval(function() {
                counter2++;
                counterDiv2.innerHTML = counter2+"%";
        
                // Stop the counter when it reaches the target number
                if (counter2 >= targetNumber2) {
                    clearInterval(interval2);
                }
            }, 10); 
        }
    
          // IntersectionObserver to detect when the div is in view
            const observer = new IntersectionObserver(entries => {
            console.log("div is in focus");
                            
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    startCounter(); // Start the counter when div comes into view
                                    observer.disconnect(); // Stop observing once the counter has started
                                }
                            });
                        }, {
                            threshold: 1.0 // Start counting when 100% of the div is visible in the viewport
                        });
    
            observer.observe(counterContainer); // Start observing the counterContainer div