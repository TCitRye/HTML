console.log("Hello".length);
console.log("Hello".charAt(0));
console.log("Hello, World".replace("Hello", "Goodbye"));
console.log("Hello, World".toUpperCase());

// 全局变量
var Name = "DashAuto";
console.log(Name);

// 局部变量
let a = 1;
console.log(a);

Name = "Simon";
console.log(Name);

a +=1 ;
console.log(a);

// 常量
const Pi = 3.14;
console.log(Pi);

var x = 5;
console.log(x+5);
x = x + 10;
console.log(x);
x++;
console.log(x);

x = "3" + "4";
console.log(x);

x = "3" + 4 +5;
console.log(x);

x = 3 + 4 +"5";
console.log(x);

// 类型自动转换
console.log(123 == "123");
// 类型不转换
console.log(123 === "123");

Name = "Daniel"
var age = 21;
if (Name == "Simon" && age == 21){
    console.log("Simon");
}else if (Name == "John"){
    console.log("John");
}else {
    console.log("Stranger")
}

a = 1;
while (a<10) {
console.log(a);
a++;
}
do {
    console.log(a);
    a--;
}while(a>0)

for (let i = 0; i < 5; i++){
    age++;
    console.log(age);
}

age = 15;
var allowed = (age >= 18) ? "Yes" : "No"
console.log(allowed);

switch(Name) {
    case 'Simon':
        console.log("Simon");
        break;
    case 'John':
        console.log("John");
        break;
    default:
        console.log("Stranger"); 
}

// 新建对象
var obj = new Object();
var obj1 = {};

obj = {
    name: "Simon",
    age: "20",
    email: "simonsmith@gmail.com",
    contact:{
        phone: "257.346.7650",
        Telegram: "@Simonsmith"
    }
}

console.log(obj["contact"]["phone"]);
console.log(obj.contact);

obj.age = "21";

console.log(obj.age);

// 新建数组

var b = new Array();
var c = [];

b = ["bird", "pig", "panda"];
b[0] = "dog";
b[1] = "cat";
b[5] = "beer";
// 在末尾添加
b.push("sheep");
console.log(b);
console.log(b[2]);

// 删除末尾项
b.pop();
console.log(b);

// 翻转数组
b.reverse();
console.log(b);

// 删除第一项
b.shift();
console.log(b);

// 在开头添加
b.unshift("lion");
console.log(b);

for (let i = 0; i < b.length; i++){
    console.log(b[i]);
}


for (let i in b) {
    console.log(b[i]);
}

// 函数
function add(x, y) {
    a += x + y;
}
add(4, 5);

console.log(a);

// arguement 函数传入变量数组
function addp() {
    let sum = 0;
    console.log(arguments);
    for (let i = 0, j = arguments.length;i < j; i++) {
        sum += arguments[i];
    }
    return sum;
}

let sum = addp(1, 2, 3, 4, 5);
console.log(sum);

function makeadder(a) {
    return function(b) {
        return a + b;
    }
}

var x = makeadder(5);
console.log(x);
sum = x(6);

console.log(sum);
