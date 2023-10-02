//ask for distance
process.stdout.write("this program converst meters to other distances. \n please, enter a distance in meters ");
//record response
process.stdin.on("data",function(inputFromuser) 
{
 const util = require("util");
 //gives value to miles  based on user input
 meters=Number(inputFromuser);   
 //gives value in kilometers based on the mile given 
 km= meters / 1000;
 miles= meters * 0.000621371;
 yards = meters * 1.09361; 
 feet= meters * 3.28084
 inches= meters * 39.3701
 lightyears= meters * 1.057e-16;
 //prints out conversion in terminal
 
 process.stdout.write(util.format("\n %d meters is \n %d kilometers \n %d miles \n %d yards \n %d feet \n %d inches \n %d lightyears.\n", meters ,km.toFixed(3) ,miles.toFixed(3), yards.toFixed(3), feet.toFixed(3), inches.toFixed(3), lightyears ));

 process.exit();


})
