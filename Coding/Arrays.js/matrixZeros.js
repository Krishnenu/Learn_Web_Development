const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
// Output: [[1,0,1],[0,0,0],[1,0,1]]

var setZeroes = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  const arr=zeroIndexRet(matrix);
  let arrLen=arr.length;
  console.log(arrLen);
  let i=0;
  while (i<arrLen){
    for(let k=0;k<row;k++){
        matrix[k][arr[i][1]]=0;
    }
    for(let l=0;l<col;l++){
        matrix[arr[i][0]][l]=0;
    }
    i++;
  }
        
  console.log(arr);
  console.log(matrix);
  
};

function zeroIndexRet(matrix){
    const zeroIndex=[];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] == 0) {
            zeroIndex.push([i,j]);
          }
        }
      }
      return zeroIndex;
}

setZeroes(matrix);
