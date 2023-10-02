//ask for a number from a user
process.stdout.write("please enter a number: ");
//record input from user
process.stdin.on("data", function(inputFromuser)
{
let num1 = Number(inputFromuser); 
//change input from user 
num2 = num1 + 12;
// printing the results and the claculations
process.stdout.write( "\n" + num2 + "=" + num1 + "+" + "12");
num3 = num2 + 30;
process.stdout.write("\n" + num3 + "=" + num2 + "+" + " 30 " );
num4 = num3 / 3;
process.stdout.write("\n" + num4 + "=" + num3 + "/" +" 3 ");
num5 = num4 * 10;
process.stdout.write("\n" + num5 + "=" + num4 + "*" + "10" );
num6 = num5 + 1 ;
process.stdout.write( "\n" + num6 + "=" + num5 + "+"  + "1" );
num7=  num6 * 0.5;
process.stdout.write("\n" + num7 + "=" + num6 + "*"  + "0,5");
//print ssecret number
process.stdout.write("\nthe secret number is " + num7 );

process.exit();
});
