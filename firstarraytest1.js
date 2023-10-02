let fruitarray = ["banana","apple", "kiwi", "orange","grapefruit"];
//print out the first item in the array
/*process.stdout.write("first item in th array is " + fruitarray[0]);*/

//add new item to array with push
fruitarray.push("pear");
//add new item with unshift
fruitarray.unshift("watermelon");
//write item added to array
process.stdout.write("\n***********item added***********\n");
//-----------------------------------------------------
/*
//loop through the array and print out each item
for (let i =0 ; i<fruitarray.length; i++){
   //print out each item in the array
    process.stdout.write(fruitarray[i]+"\n");
*/
//-----------------------------------------------------
//sort in alphabetical order i the array (z-a)
fruitarray.sort().reverse();
//write item sorted
process.stdout.write("\n***********item sorted***********\n");
//loop through the array and print out each item
for (let i =0 ; i<fruitarray.length; i++){
    //print out each item in the array
     process.stdout.write(fruitarray[i]+"\n");
}