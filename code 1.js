var a = 10;
console.log(a); // Output: 10


let b = 20;

function test() {
    let b = 30;
    console.log(b); // Output: 30
}

test();

console.log(b); // Output: 20

console.log(`The value of a is : ${a}`);

console.log("The value of a is :" + a);


let num = 5+"2";
console.log(num); // Output: "52"
console.log(typeof num); // Output: "string"


console.log("5"*2);



let o = 5;

if(o==18){
    console.log("You are eligible to vote");
}

else if(o==10){
    console.log("You are 10 years old");
}
 
else{

}

switch(o) {
    case 1:
        console.log("o is 1");
        break;
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("o is 5");
        break;
    default:
        console.log("o is not between 1 and 5");
        break;
}


for (let i=0; i<5; i++){
    console.log(i);
}

// for i in range (0,10,1)

let i = 0;
while(i<=5){
    console.log(i);
    i++;
}


for (let row = 0; row < 10; row++){
    for (let col = 0; col <= row; col++){
        process.stdout.write("*");
    }
    console.log();
}


function add(a,b){
    console.log(a+b);
}

add(90,100)