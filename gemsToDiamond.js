// Problem--5



// Function That converts the gems into diamond


function gemsToDiamond(number1,number2,number3){

    //Error handling
    if(typeof number1!='number' || typeof number2!='number' || typeof number3!='number'){
       return "Please enter three numbers";
   }

   let firstFirendDiamond=number1*21;
   let secondFriendDiamond=number2*32;
   let thirdFrienddiamond=number3*43;

   // Sum Of all number Of Diamond

   const numberOfDiamond=firstFirendDiamond+secondFriendDiamond+thirdFrienddiamond;

   if(numberOfDiamond>2000){
       return (numberOfDiamond-2000);
   }
   else{
       return numberOfDiamond;
   }
}

let restDiamond=gemsToDiamond(1,1,1);  //Calling the function
console.log(restDiamond);