

//Ask user for a number 
process.stdout.write("type a number in the terminal");
//take number written by user
process.stdin.on("data", function(inputFromuser)
{

     let number1 ; 
    number1 = Number(inputFromuser);
    number2 = number1 + 1;
  

    

    

    process.stdout.write("the given was " + number1 + " and the secret number was " + number2 ); 
    process.exit();

});
// (extra line)let number = inputFromuser.toString();
//add plus 1 to the users number   

//print if win or lose
 














