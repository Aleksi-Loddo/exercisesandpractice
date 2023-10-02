process.stdout.write("what is your name?\n");
process.stdin.on ("data",function(inputFromuser){

let name=inputFromuser.toString().trim();

process.stdout.write("hello " +  name  + "!\n");

process.exit();
})