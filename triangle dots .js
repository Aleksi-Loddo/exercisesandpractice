//task 4.2 triangle 
process.stdout.write("please enter size odf triangle: " );
process.stdin.on('data', function(inputFromuser) {
let size=Number(inputFromuser);

for (i=1;size>=i;i++){
   
    for(j=1;j<=i;j++){
    process.stdout.write("*");
    }
process.stdout.write("\n");
}


process.exit();
});