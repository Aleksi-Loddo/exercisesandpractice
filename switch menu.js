process.stfout.write("please select what you want to do: \n 1. print out hello \n 2. print out current date and time \n 3. exit");
 process.stdin.on("data",function(inputfromuser){
let currentdate=new Date();
    if(inputfromuser==1){
        process.stdout.write("hello");
    }else if(inputfromuser==2){
        process.stdout.write(currentdate.toString());
    }else if(inputfromuser==3){
        process.stdout.write("exit");   
    }
        process.exit();
    });