//4.5 task 5 smallest and largest with random numbers
let randomarr=[]
let i = 0;
//generates 100 number
while (i<=100){
  //random number generator + pushing into array
 randomarr.push(Math.random () * 1000);
i++;
}
//check for maxlet 
max = randomarr[0];
z=1;
while (z<=100)

for (let i = 0;i < randomarr.length; i++){
    if(randomarr[i]>max){
    max= randomarr[i];
    z++;
} else{
    z++;
}
}
//check for min
let min= randomarr[0];
y=1;
while (y<=100){
for (let x = 0; x < randomarr.length; x++){
    if (randomarr[x]<min){
        min= randomarr[x]
    y++;
    } else{
        y++;
    }
}
//print array
console.log(randomarr);
//print higest and lowest
process.stdout.write("\n" +max + " is the highest number " + "\n" + min + " is the lowest number");


}