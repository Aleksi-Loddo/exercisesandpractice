//1. ask user to enter a string
process.stdout.write('enter a string: ');
//2. read user input
process.stdin.on('data', function(inputFromuser){
//3. save user input
let string= inputFromuser.toString().trim();
console.log(string);
//loop though the string

for (let i=0; i<string.length; i++){
process.stdout.write( "char in index "+ i + " is "+string.charAt(i)+"\n");
}
//loop through the string backwards
for (let i=string.length-1; i>=0; i--){
    process.stdout.write( "char in index "+ i + " is "+ string.charAt(i)+"\n");
    }
x=string.length-1;
i=0;
y=string.char(i);   
while (x>=0 && y<=string.length){



    }
    }
process.exit();
}); 