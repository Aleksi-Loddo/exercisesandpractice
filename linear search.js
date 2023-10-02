//task 4.4 task 4 linear Search
/*Create a program that finds specific items in an array.
1. Create an array with the following items: 55, 23,
6456, 324, 21, 234, 72, 21
2. Ask the user what they want to search for in the
integer array.
3. Loop through the array and compare the values with the input given by the user.
4. If the item is found, print out in which index the value was found.
5. If the item is not found, print out a message saying item was not found.*/
const { notStrictEqual } = require("assert");

 

//create a static array

let numarr= [55,23,6456,324,21,234,72,21]
//ask to type in a number that may be in the array
process.stdout.write("the number you'd like to search is: ");
//start reading user input
process.stdin.on(("data"),function(inputFromuser){
//creates variable for searched number
   let x=0; 
   let searchednumber= Number(inputFromuser);
//checking values in array
      
        for(i=0;i<numarr.length;i++){
      
        if(searchednumber!=numarr[x]){
            x++
            //number not found within array
            if(x==numarr.length-1 && searchednumber!=numarr[x]){

            process.stdout.write(searchednumber + " was not found");
        process.exit(); 
        }            
        } else if (searchednumber == numarr[x]){
        
            process.stdout.write(searchednumber + " was found at index " + x );
        process.exit();
     } 
    }
});