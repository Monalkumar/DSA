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


// let arr =[1,2,3,4,5,6,7,95,96,97];
// let smallestNum = Infinity

// function smallestNums(){
//     for (let i = 0; i<arr.length; i++){
//         if(arr[i]<smallestNum){
//              smallestNum=arr[i];

//         }
         
//     }
//     return smallestNum;

// }

// let nums = smallestNums();
// console.log(nums);

// let arr = [4,9,0,2,8,7,1,97,101] //7
//  let secondLargestNums= -Infinity
//  function secondLargestNumbers(){
//   for(let i = 0; i<arr.length-1; i++){
//         if(arr[i]>secondLargestNums){
//             secondLargestNums=arr[i] 
//         }
//     }
//     return secondLargestNums
//  }

//  let nums = secondLargestNumbers();
//  console.log(nums)

// 1st method

// function addNums(a,b){
//     return a+b;
// }
// let addNumbers= addNums(5,6);
// console.log(addNumbers)

// 2nd Methdod
// function sum(a,b){
// let add = (a+b);
// console.log(add)
// }
// sum(5,6)

// square Numbers 1st Methods
// function squareNums(x){
//     return x*x
// }
// let squareNumbers = squareNums(5);
// console.log(squareNumbers)
  
// function isPersonEligibleForVote(x){
//       if(x<18){
//         console.log("not eligbile for the vote ")
//       }
//       else console.log("eligible for the vote now")
// }
// isPersonEligibleForVote(21)

// please check the numbr is odd or even
// function isNumberEvenOrOdd(nums){
//     if(nums%2 === 0){
//         console.log("number is even")
//     }
//     else{
//         console.log("number is odd")
//     }
// }

// isNumberEvenOrOdd(2)

// let arr = [1,2,3,4,5,6,7]

// for (let i=0;i<arr.length; i++){
//   if(arr[i]%2==1){

//   }
//   console.log(arr[i])
 
// }

// write a function that searches for an element in an array and returns the index,if the element is not present then just return -1 write codes for this programming

// let arr =[4,2,0,10,8,30,51,101]
// function searchIndexOfTheElement (x){
   
//    for (let i=0; i<arr.length; i++){
//     if(arr[i]==x){
//         return i
//     }
//    }
//    return -1
// }

// let elementIndex = searchIndexOfTheElement(51);
// console.log(elementIndex);

// write a function that returns the number of negative in an array

// let arr = [1,2,3,4,5,-100,-101,-5,-10,-23,-45,-99,501];
// let count = 0
// function negativeNums (){

//     for (let i = 0; i<arr.length; i++){
//         if(arr[i]<0){
//          count++

//         }
//     }
//     return count
// }

// let nums = negativeNums();
// console.log(nums) 

// find the largest numbr in the array

// let arr = [1,2,3,4,5,6,7,99];
// let largestNums = -Infinity
// function largestNum(){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>largestNums){
//          largestNums =arr[i]
//         }
//     }
//     return largestNums; 
// }
// let nums = largestNum();
// console.log(nums)


// find the smallest Number in array

// let arr = [1,2,3,4,5,6,7,99,101];
// let smallestNums = Infinity
// function largestNumbers(){
//     for(let i =0; i<arr.length; i++){
//         if(arr[i]<smallestNums){
//             smallestNums=arr[i]
//        }
//     }
//     return smallestNums;
// }

// let nums = largestNumbers();
// console.log(nums);

// find the second largest numbers in the array

let arr = [101, 99, 50, 40, 30, 20,100,500,600,100,900,1100,1100,501,501];

let firstLargestNum = -Infinity;
let secondlargestNum = -Infinity;

function secondlargestNumbers(){
    for ( let i = 0; i<arr.length; i++){
        if(arr[i]>firstLargestNum){
            secondlargestNum = firstLargestNum;
            firstLargestNum = arr[i]
        }
        else if(arr[i]>secondlargestNum && arr[i] !== firstLargestNum){
            secondlargestNum =  arr[i] 
        }
    }
    return secondlargestNum;
}

let nums = secondlargestNumbers();
console.log(nums)