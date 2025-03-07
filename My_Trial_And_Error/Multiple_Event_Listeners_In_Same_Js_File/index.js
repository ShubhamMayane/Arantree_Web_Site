
window?.addEventListener("load",function(){

  console.log("hello shubham");
  

})



function main()
{
  console.log("main is called");
  

  // Get the button and counter


 let text1obj = document.getElementById("text-1");
 let text2obj = document.getElementById("text-2");
 let text3obj = document.getElementById("text-3");
 
 // Call the addEventListener method


 text1obj?.addEventListener("click",fun);
 text2obj?.addEventListener("click",fun);
 text3obj?.addEventListener("click",fun);
 
 // Define the increase function
 function fun()
 {
   alert("event is happend");
   
 }



}


 main();