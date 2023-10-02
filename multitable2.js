//task 4.1 multiplication table 1-10

for (i=1;i<=10;i++){
    process.stdout.write("\n"+"the multuiplication table for " + i+ "\n" + "*************************************")
    for(j=1;j<=10;j++){
    let answer= i*j;
    process.stdout.write("\n"+"*   "+ i + " * "+ j + "=" + answer+ "   *" )

    }
}





/*let multiplier = 1;
let number = 1;
for(number<=10; number++;) {
multiplier = 1;
    for (multiplier<= 10; multiplier++;) {
        answer=multiplier*number;
    process.stdout.write(multiplier + " * " + number + " = " + answer + "\n");
}
}*/