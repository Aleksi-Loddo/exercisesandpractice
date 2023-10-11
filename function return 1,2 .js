//creates funtion for variables
function getsum(num1,num2){
    //calculate the sum of these two
    //print out result

   return num1 + num2;
}
//call back to function
a = 10;
b = 100;
//sum of return

let sum =getsum(a,b)
process.stdout.write("\n" + sum);
process.stdout.write ("\n"+ getsum(20,5));