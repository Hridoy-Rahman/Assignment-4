// problem--4


// Function That return the number Of negative number in an array

function findingBadData(array){

    //Error handling
    if(typeof array!='object'){
       return "Please enter an array";
   }


   let count=0;
   for(let i=0; i<array.length; i++){
       if(array[i]<0){
           count++;
       }
   }
   return count;
}

const numbers=[ -4, -9, -5, -33, -55 ];

console.log(findingBadData(numbers));   //Calling the function and printing the result