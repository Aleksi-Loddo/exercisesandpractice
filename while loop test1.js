process.stdout.write("please write a name?");
process.stdin.on('data', function(UserFromInput) { 

let name = UserFromInput;
let i = 0;
while (i < 10) {
    process.stdout.write(name);
    i++;
}
process.exit();
});