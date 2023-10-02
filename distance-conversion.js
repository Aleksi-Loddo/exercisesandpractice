//ask for distance
process.stdout.write("this program converst miles to kilometers. \n please, enter a distance in miles ");
//record response
process.stdin.on("data",function(inputFromuser) 
{
 const util = require("util");
 //gives value to miles  based on user input
 miles=Number(inputFromuser);   
 //gives value in kilometers based on the mile given 
 km= miles * 1.6093;
 //prints out conversion in terminal
 process.stdout.write( miles + " miles is " + km + " in kilometers ");

 process.stdout.write(util.format("\n %d miles is %d in kilometers.\n", miles,km));

 process.exit();

})
