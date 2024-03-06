// const a = [1, 2, 3, 7, 5];
// let s = 12;

const a = [1,2,3,4,5,6,7,8,9,10];
let s= 27;
// output 1,3

function continuousSubArray(arr, sum) {
  let firstP = 0;
  let second = 1;
  let resSum = arr[0];
  while (firstP < arr.length) {
    if (resSum < sum && resSum != sum) {
      resSum = resSum + arr[second];
      second++;
    } else if (resSum > sum) {
      firstP = firstP + 1;
      second = firstP + 1;
      resSum = arr[firstP];
    } else {
      return [firstP, second-1];
    }
  }
  return 'No value Found';
}

console.log(continuousSubArray(a, s));


// function continuousSubArray(arr, sum) {
//     let firstP = 0;
//     let second = 0; // Start the second pointer from the same position as the first
//     let resSum = 0; // Initialize the sum to 0
//     while (firstP < arr.length && second < arr.length) { // Make sure both pointers stay within the array bounds
//       if (resSum < sum) {
//         resSum += arr[second]; // Add the element pointed by the second pointer
//         second++;
//       } else if (resSum > sum) {
//         resSum -= arr[firstP]; // Subtract the element pointed by the first pointer
//         firstP++;
//       } else {
//         return [firstP, second - 1]; // Found the subarray, return the indices
//       }
//     }
//     return 'No value Found'; // If no subarray is found, return this message
//   }
  