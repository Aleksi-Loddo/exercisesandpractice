//task 3.3 looping through strings
//1. ask user to enter a string
process.stdout.write('enter a string: ');
//2. read user input
process.stdin.on('data', function(inputFromuser){
   //save user input as variable
   let string= inputFromuser.toString().trim();
  //3. loop through the string
 for (let i=0; i<string.length; i++){
    //4. print out each character
    process.stdout.write((i+1) + ". the character is " + string.charAt(i)+"\n");
 }
    process.exit();
});






//print out  string characters by characters saying "the character is [given string]"   
