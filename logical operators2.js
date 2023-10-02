//2.5 task 5: logical processor
//ask for user input
const Process = require("process");
Process.stdout.write("please enter three numbers separated \n with sigle spaces charecters: ");
//userinput
process.stdin.on("data",function(inputfromuser){
//variables
    //let numbers=inputfromuser.toString().split();
    let numbers=String(inputfromuser).trim().split(" ");
    console.log(numbers);
let num1=numbers[0];
let num2=numbers[1];
let num3=numbers[2];
console.log(num1,num2,num3);
let threedifferent="you entered three different numbers"
let threematching="you entered three matching numbers"
let onedifferent="you entered two matching numbers"
let magicnumber="you entered the magic number 2!"
//different conditions
 if(num1==num2 && num2==num3 && num1==num3 && num3==num1 && num3==num2 && num2==num1){
    if(num1==2 && num2==2 && num3==2){
        process.stdout.write("you entered the magic number 2!");
    }else{
    process.stdout.write("you entered three matching numbers");
    }
}  
else if (num1==2 || num2==2 || num3==2){
    
    process.stdout.write("you entered the magic number 2!");
}
else if (num1==num2 || num2==num3 || num1==num3){ 
    process.stdout.write("you entered two matching numbers");
}
else {
    process.stdout.write("you entered three different numbers");
    }



process.exit();
}); 