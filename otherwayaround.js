process.stdout.write("please enter a string: ");

process.stdin.on('data', function(inputFromUser) {

let input = inputFromUser.toString().trim();
for (i=input.length-1;i>=0;i--){
    process.stdout.write(input[i]);
}
process.exit();
});