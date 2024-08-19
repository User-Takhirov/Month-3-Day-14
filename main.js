// musbat sonlarning yigindisi
// let arr = [12, 5, 3, -6, -2];
// const x = (arr) => {
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       num += arr[i];
//     }
//   }
//   return num;
// };
// console.log(x(arr));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function User() {
//   this.name = "gofur";
//   this.lastName = "Ergashev";
//   this.age = 4;
//   this.show = function () {
//     console.log(this.name);
//   };
// }

//123ni teskarisini chiqarish
// let a = 123;
// let b = a % 100;
// let c = (a - b) / 100;
// let d = (b - (a % 10)) / 10;
// let e = b % 10;
// let f = e * 100 + d * 10 + c;
// console.log(f);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//123ni teskarisini chiqarish
// let a = 123;
// const x = (num) => {
//   let result = "";
//   for (let i = String(num).length - 1; i >= 0; i--) {
//     result += String(num)[i];
//   }
//   return Number(result);
// };
// console.log(x(a));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//priceni hisoblash
// let arr = [
//   { price: 10, id: 2 },
//   { price: 5, id: 1 },
//   { price: 15, id: 4 },
//   { price: 20, id: 6 },
//   { price: 50, id: 7 },
// ];
// const x = (arr) => {
//   priceCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     priceCount += arr[i].price;
//   }
//   return priceCount;
// };
// console.log(x(arr));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
// let a = prompt("son kiriting");
// function x(son) {
//   let sum = 0;
//   while (son > 0) {
//     sum += son % 10;
//     son = parseInt(son / 10);
//   }
//   return sum;
// }
// console.log(x(a ));

//

// let arr = [12,15,3];
// const x = (numbers) => {
//   let count = 0;
//   for (let i = 0; i < numbers; i++) {
//     if (numbers[i] % 1 == 0 && numbers[i] % numbers[i] == 0) {
//       count += numbers[i];
//     }
//   }
//   return count;
// };
// console.log(x(arr));

//
//function x(son){
// let count = 0;
// for (let i = 1; i <= son; i++) {
//   if (son % i == 0) {
//     count++;
//   }
//   return count == 2;
// }
// console.log(x(6));

//
// function x(num) {
//   let yigindi = 0;
//   while (num > 0) {
//     yigindi += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return yigindi;
// }
// function x2(callback) {
//   let num = 201;
//   console.log(num);
//   let result = callback(num);
//   console.log(result);
// }
// x2(x);
