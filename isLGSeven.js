// Problem--3

//Fuction That returns Absolute Difference 

function isLGSeven(number){
    //Error handling
    if(typeof number!='number'){
       return "Please enter a number";
   }

   const absoluteDifference=Math.abs(number-7);

   if(absoluteDifference<7){
       return (number-7);
   }
   else{
       return (absoluteDifference*2);
   }
}

const inputNumber=6;
console.log(isLGSeven(inputNumber));  //Calling the function and printing the result