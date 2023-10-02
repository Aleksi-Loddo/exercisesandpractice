/* Create a program that asks the user for a string and then
prints it out so that all odd characters are in uppercase
and all even characters are in lower case. Use a for loop.*/
//task 4,4 to mixedcase
process.stdout.write("please enter a string: ");
process.stdin.on('data', function(inputFromUser) {
     process.stdout.write("the word in mixed cases is: ");
    let string = inputFromUser.toString().trim();
    for (i=0;i<=string.length; i++){
if (i%2==0){
    process.stdout.write(string.charAt(i).toLowerCase());
} else { 
process.stdout.write(string.charAt(i).toUpperCase());

}





    }
process.exit();
});