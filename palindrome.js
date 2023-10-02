/*Ask the user to give a string and then check if it’s a palindrome
(a word, phrase, or sequence that reads the same backwards
as forwards, e.g. madam or nurses run) or not. Use loops to
solve this.
Note: What happens if madam was spelt with a capital letter? */

//1. ask user to enter a string
process.stdout.write('enter a string: ');
//2. read user input
process.stdin.on('data', function(inputFromuser){
//3. save user input
let string= inputFromuser.toString().trim();
console.log(string);

let i=0;
//create a flag for cheking if the string is palindrome or not
let palindromeok = true;
//loop though string
while ((i<string.length - i) && palindromeok){
if (string.charAt(i) != string.charAt(string.length - 1 - i)){
    palindromeok = false;}
i++;
}
if(palindromeok){
    process.stdout.write("word " +string + " is a palindrome\n");
}
else{

    process.stdout.write("word " +string + " is not a palindrome\n");
}


process.exit();
}); 