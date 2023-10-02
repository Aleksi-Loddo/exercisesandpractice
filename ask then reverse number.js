/*Create a program that keeps asking the user to input
numbers. These numbers are stored in an array. Keep asking
till zero is entered. After that the numbers are printed out in
a reverse order. Don’t use array methods for this but only
simple loops.*/

process.stdout.write("this program reads numbers from the keyboard. \n after receiving a zero, it prints the numbers \n in reverse order. please, start entering numbers.\n the program will stop when you enter a zero. \n");


let numberarray = [];
process.stdin.on("data", function(inputFromuser) {
   
    let x = Number(inputFromuser);     
   
         if (x !== 0) {
            //take user input again
             numberarray.push(x);
            i =0;
            process.stdout.write(  numberarray[i] + " enter another number: "  );
           
                    console.log("\n"+numberarray+"\n")
        } else {
            process.stdout.write("Reverse order: ");    
        for(y=numberarray.length-1;y>=0;y--)
            process.stdout.write( numberarray[y]+ " ");
process.exit();
    }
});
