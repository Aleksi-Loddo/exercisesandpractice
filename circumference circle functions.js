//5.4 task 4 circumference of a circle
function calccircumferencecircle(radius){

         radius =Math.floor(Math.random() * 100);

        circumference=2*Math.PI*radius; 

        process.stdout.write("circumfernce of a circle with radius "+ radius + " is " +  circumference+ "\n");
}

for (i=1; i<=3;i++){

calccircumferencecircle();

}