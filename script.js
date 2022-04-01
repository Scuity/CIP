document.write("Hello, world!");

function sayHello(){
    var response = prompt("what's ur name?");
    alert('hello,'+ response +'!have a nice day!');
}
sayHello();

function add(a,b){
    return a + b;
}
console.log((20,30));
console.log((50,500));

function showTopic(){
    var x = document.getElementById('demo');
    x.style.fontSize = '25px';
    x.style.color = 'pink';
}