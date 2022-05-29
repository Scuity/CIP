document.write("Hello, world!");

function playerName(){
    var name = prompt("What's your name?");
    alert("Hello"+ name + ",welcome to this puzzle game!");
}
playerName();

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