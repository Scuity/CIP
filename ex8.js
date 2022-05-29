var a =[{title:"a",time:"2",status:"aa"},
{title:"b",time:"3",status:"bb"},
{title:"c",time:"4",status:"cc"}];

var bb = ["a","b","c"]
/*
bb.forEach(function(title){alert(title);
});
遍历数组里面
*/
var a =[{title:"a",time:"2",status:"aa"},
{title:"b",time:"3",status:"bb"},
{title:"c",time:"4",status:"cc"}];

for (var a of ){
    if(a.status === "bb"){
        console.log("the movie"+a.title+"play at"
        +a.status)
    }
    else{
        console.log("sorry"+a.title+"sold out")
    }
};
