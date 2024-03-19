// Festive times are coming, so you decided to buy salt in advance.
// There are n shops around that sell salt: the i-th shop sells one pack of salt for ai coins,

// but only one pack to one customer each day. So in order to buy several packs, you need to visit several shops.
// Another problem is that prices are increasing each day: during the first day the cost is ai,
// during the second day cost is ai+1, during the third day — ai+2 and so on for each shop i.

// On the contrary, your everyday budget is only x coins. In other words, each day you go
// and buy as many packs as possible with total cost not exceeding x. Note that if you don't spend some
// amount of coins during a day, you can't use these coins during the next days.

// Eventually, the cost for each pack will exceed x, and you won't be able to buy even a single pack.
// So, how many packs will you be able to buy till that moment in total?

// Input
// n : The number of shops
// x : Everyday budget
// arr : contains [a1,a2,…,an] — the initial cost of one pack in each shop
// Output
// The total number of packs you will be able to buy until prices exceed your everyday budget.
// Constraints
// 1 ≤ n ≤ 2⋅10^5
// 1 ≤ x ≤ 10^9
// 1 ≤ arr[i] ≤ 10^9
// Example:
// Input:

let n = 3;
let x = 7;
let arr = [2, 1, 2];
// Output:

// 11
// Input:

// n = 5
// x = 9
// arr = [10, 20, 30, 40, 50]
// Output:

// 0

// function saltPacks(noOfShops, budget, n) {
//   let totalPurchased = 0;
//   let budgetAvailble = budget;
//   let i = 0;
//   while (i < 4) {
//     for (let i = 0; i < n; i++) {
//       totalPurchased += 1;
//       budgetAvailble = budgetAvailble - noOfShops[i];
//       noOfShops[i] = noOfShops[i] + 1;
//     }

//     budgetAvailble = budget;
//     i++;
//   }

//   return totalPurchased;
// }

// console.log(saltPacks(arr, x, n));


let factorial=(n)=>{
    if(n==1 || n==0){
        return 1;
    }
    console.log(n);
    let res=factorial(n-1)*n;
return res;
}

console.log(factorial(5));


var salary = '1000';
function salary(){
	consle.log('orginal',salary);
	var salary = 2000;
	console.log('new orginal',salary);  
}