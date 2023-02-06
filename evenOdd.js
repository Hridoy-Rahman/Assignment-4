// Problem--2


// Function That tells you that 
// the length Of string you have entered is even or odd

function evenOdd(str){
    //Error handling
    if(typeof str!='string'){
        return "Please enter a string";
    }

    // string length
    const x=str.length;
    if(x%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }

}

const string="chatgpt";
console.log(evenOdd(string)); //Calling the function and printing the result