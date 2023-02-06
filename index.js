
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

const number=50;
const result=mindGame(number); //calling the function
console.log(result);


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