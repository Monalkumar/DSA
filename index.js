// function multiply(a){
//     let result = a*a;
//     return result

// }

// let value = multiply(5)
// console.log(value)

// function eligibilityOfPerson(age){
//     if(age>=18){
//         console.log("you can vote")
//     }
//     else{
//         console.log("you need to be 18+ for the same")
//     }
// }

// eligibilityOfPerson(21)

// function checkEvenOdd (x){
//     let nums = x%2

//     if(nums===0){
//     console.log("numbers is even")
// }
// else{
//     console.log("numbers is odd")
// }
// }

// checkEvenOdd(1516)

// let count = 0;
// function getText(){
//     console.log("hello",count++)
// }

// function debounce(func,delay){
//     let timer;
//     let context = this;
//     agrs= arguments;
//     return function(){
//         clearTimeout(timer)
//         timer= setTimeout(()=>{
//             getText(context,arguments)
//         },delay)
//     }
// }

// let functionBetter = debounce(getText,300)

//  function isEvenOdd(x){
//     let numbers = x%2;
//     if(numbers==0){
//         console.log("Numbers is Even")
//     }
//     else{
//         console.log("Numbers is odd")
//     }
// }

// isEvenOdd(16);

// function sayHello(i){
//     console.log( i,"hello world");

// }
// for(let i=0; i<5;i++){
//         sayHello(i)
//     }

// let arr =[1,2,3,4,5,6,7]
// let length = arr.length;

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i+1])
// }

// let arr =[1,2,3,4,5,6,7];
// for (let i = 0; i<arr.length; i++){
//     if(arr[i]%2===0){
//  console.log(arr[i])
//     }
// }

// let i = 0;
// while(i<7){
//     console.log("hello world",i);
//     i++
// }

// function searchElementNumbers(arr, x) {
//   for (let i = 0; i < arr.length; ++i) {
//     if (arr[i] == x) {
//       return i;
//     }
//   }
//   return -1;
// }

// let arr = [5, 6, 12, 11, 21, 25];
// let nums = searchElementNumbers(arr, 25);
// console.log(nums);

// let count = 0;
// function showNums(){
//     for( let i = 0; i<arr.length; i++){
//         if(arr[i]<0){
//          count++

//         }

//     }
//     return count;

// }
// let arr = [2,-9,17,0,1,-10,-4,8,5]
// let nums = showNums();
// console.log(nums)

// let arr =[1,2,3,4,5,6,7,95,96,97]
// let largestNums = -Infinity;

// function largstNumbers(){
// for (let i = 0; i<arr.length; i++){
//     if(arr[i]>largestNums){
//         largestNums=arr[i]
//     }
// }
// return largestNums;
// }
// let nums = largstNumbers();
// console.log(nums)

let arr = [-1,-2,-3,-4,-5,-6,-7,-11,1,2,3,4,5,6,7,11];
let count = 0;

function addSumIndex(){
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i]<0){
           count++ 
        }
    }
    return count;

}
const nums = addSumIndex();
console.log(nums);