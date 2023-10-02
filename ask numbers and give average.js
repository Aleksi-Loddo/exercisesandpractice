//4.3 task 3: average
/* Create a program that asks user for number and
calculates the average for them. Numbers will be asked
till the user enters a letter.
Hint! You can check whether a value is numeric with
isNaN().*/ 

process.stdout.write("this program calculates the mean value  \n of the numbers you enter from the keyboard.  \n the program stops when you enter a letter \n");


let numberarray = [];
process.stdin.on("data", function(inputFromuser) {
   
    let x = Number(inputFromuser); 
console.log(x);
    if(Number.isNaN(x)){
      //status of array
      console.log(numberarray)
           
        //get sum value of array
        let sum = 0
        for (let i= 0; i < numberarray.length; i++) {
            sum += numberarray[i];
          }
       //check max value
        console.log(sum);
        //writes the average
      process.stdout.write(  "the average is: "  );
        let average= sum / numberarray.length;
        process.stdout.write(average.toString());
       //exit process
        process.exit();   
       
    } else {
        //push number into array
        numberarray.push(x);
        //ask to type another number
        process.stdout.write( "\n enter another number: "  );
        //check on the array
        console.log("\n"+numberarray+"\n");
    }
});   