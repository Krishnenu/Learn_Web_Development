function outer() {
  let count = 2;
  return function inner() {
    if (count <= 0) {
      console.log("its less than 0");
    }
    count = count - 1;
    return count;
  };
}

const callfunc = outer();

callfunc();
callfunc();
callfunc();

//lets deep to closure

function hide(){
    // let i;
    for(let i=0;i<10;i++){
        setTimeout(()=>{
            console.log(i);
        },2000)
    }

}

hide();