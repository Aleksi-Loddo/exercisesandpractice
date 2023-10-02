// 4.1 task 1: creating and looping through an array    

let array = [
        [5,7,32,31,8],
        [12.4,-13.55,67.44],
        ["Helsinki","Lissabon","New York", "Shanghai"]

];
// thourth city in string array
process.stdout.write("the value from the index number 3 is: " + array[2][3]);
//third number in array int
process.stdout.write("\nthe fourth item in the int array is: " + array[0][2]);
//number of items in double array
process.stdout.write("\nin the double array there are " + array[1].length +" items"  );
//all of the content in interger loop
process.stdout.write("\n interger array contents: ");
for(i=0;i<array[0].length;i++){
    //why (array[0][i].toString)!!!??
    process.stdout.write("\n"+array[0][i].toString() );   
}
//writing all of double array
process.stdout.write("\n Doubler array contents last to first: ");
for(x=array[1].length-1;x>=0;x--){
process.stdout.write("\n"+ array[1][x])//.toString()
}

process.stdout.write("\n New string array: ");
//splicing strings
array[2].splice(0,4,"empty","empty","empty","empty");
//writing out new strings
process.stdout.write(array[2].toString());
