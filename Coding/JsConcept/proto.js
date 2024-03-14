const arr1 = [1, 1, 2, 3, 4, 9, 5, 2, 3];


Array.prototype.customFilter=function (){
    return this.filter((item,index,arr)=>arr.indexOf(item)==index).sort((a,b)=>b-a);
}

console.log(arr1.customFilter());
