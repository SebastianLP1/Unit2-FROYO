

//Code//
 const alertMessage= "Welcome to Freds Froyo Shop"
alert(alertMessage)
prompt("Please input your desired flavors!")



let flavors = [`vanilla`,`vanilla`,`vanilla`,`strawberry`,`coffee`,`coffee`];

const count = {};

for (let i = 0; i < flavors.length; i++) {
let ele = flavors[i];
if (count[ele]) {
 count[ele] += 1;
} else {
 count[ele] = 1;
}
}
console.log(count);
