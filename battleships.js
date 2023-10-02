let battlefield1 = [
        ["*","*","*","*","*"],
        ["*","+","*","*","+"],
        ["*","+","*","*","+"],
        ["*","+","*","*","+"],
        ["*","+","*","*","*"]
];
let battlefield2 = [
    ["*","*","*","*","*"],
    ["*","+","*","*","+"],
    ["*","+","*","*","+"],
    ["*","+","*","*","+"],
    ["*","+","*","*","*"]
];

hit1=battlefield1[1][1];
hit2=battlefield1[2][1];
hit3=battlefield1[3][1];
hit4=battlefield1[4][1];
hit5=battlefield1[1][1];
hit6=battlefield1[2][4];
hit7=battlefield1[3][4];

i=0;
function promptUser(){
process.stdout.write("enter x and y  coordinates separated by space: ")
}
process.stdin.on("data",function(inputFromUser) {
//takes coordinates x and y  from user  
    process.stdout.write("enter x and y  coordinates separated by space: ")

//puts coordinates given into x and y numbers
shotsneeded=i;
let coordinates=inputFromUser.toString().trim();    
[xcoord, ycoord] = coordinates.split(" ");
let x = Number(xcoord);  
let y = Number(ycoord);
 // if hit 
    if(battlefield1[x][y]=="+"){
     battlefield1[x].splice(y,1,"*");
    process.stdout.write("\nyou hit a ship\n");
            i++;
 //if miss
        } else  {
i++;
process.stdout.write("\nMiss!\n");

}
hit1=battlefield1[1][1];
hit2=battlefield1[2][1];
hit3=battlefield1[3][1];
hit4=battlefield1[4][1];
hit5=battlefield1[1][1];
hit6=battlefield1[2][4];
hit7=battlefield1[3][4];


//check if shot maximum is reached
if(( shotsneeded>8)){
process.stdout.write("you dind't sink all the ships in time\n");
    console.log(battlefield2);
    process.exit();
    //cheking if all boats are not destroyed  
}else if(hit1=="+"||hit2=="+"||hit3=="+"||hit4=="+"||hit5=="+"||hit6=="+"||hit7=="+"){
    console.log(" shots taken " + shotsneeded);
    promptUser();
}
else{
    //all boats are destroyed
    process.stdout.write("you have sunk all the ships\n");
    process.stdout.write("\nit took " + shotsneeded + " to sink all ships")
    console.log(battlefield2);
    
    process.exit();
}
     

});

