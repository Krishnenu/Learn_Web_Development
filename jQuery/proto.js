Array.prototype.add=function (){
    return this.map((item)=>item+2);
}

console.log([2,4,5].add());