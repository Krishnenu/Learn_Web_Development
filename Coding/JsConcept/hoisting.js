var a=300;

function f(){
    console.log(a);
    var a=200;
    console.log(a);
}
f();

for(var c=0;c<10;c++){
    setTimeout(()=>{
        console.log(c)
    },0)
}






