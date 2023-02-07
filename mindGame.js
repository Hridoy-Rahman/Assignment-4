
// Problem-1

// Function That will return the final result Of calculation
function mindGame(number){

    // Error Handling
    if(typeof number!='number'){
        return "Please enter a number";
    }

    // calculation

    const result=((number*3+10)/2)-5;
    return result;
}

const number=33;
const result=mindGame(number); //calling the function
console.log(result);