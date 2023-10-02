//task 3.4 multiplication table
process.stdout.write('enter a number: ');

process.stdin.on('data', function(inputFromUser){
    let number = inputFromUser.toString().trim();
    let multiplier = 1;
    do{

     let answer =multiplier*Number(number);
process.stdout.write( "\n"+ multiplier + " * " + number + " = " + answer + "\n");


multiplier++;
}   while (multiplier <= 10)
process.exit();
});