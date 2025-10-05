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

// let arr = [101, 99, 50, 40, 30, 20,100,500,600,100,900,1100,1100,501,501];

// let firstLargestNum = -Infinity;
// let secondlargestNum = -Infinity;

// function secondlargestNumbers(){
//     for ( let i = 0; i<arr.length; i++){
//         if(arr[i]>firstLargestNum){
//             secondlargestNum = firstLargestNum;
//             firstLargestNum = arr[i]
//         }
//         else if(arr[i]>secondlargestNum && arr[i] !== firstLargestNum){
//             secondlargestNum =  arr[i]
//         }
//     }
//     return secondlargestNum;
// }

// let nums = secondlargestNumbers();
// console.log(nums)

// for(let i =0; i<5; i++){
//     for (let j=0; j<i; j++){
//         console.log(i,j,"*")
//     }}

// for(let i =5; i>0; i--){
//     for (let j=0; j<i; j++){
//         console.log(i,j, )
//     }
// }

// for(let i = 0 ; i<3; i++){
//     let row = ""

//     for (let j=0; j<6; j++){
//         row = row + "* "

//     }
//      console.log(row)

// }

// for(let i = 0 ; i<5; i++){
//     let row = ""
//     for (let j=0; j<=i; j++){
//         row = row + (j+1)
//        }
//      console.log(row)

// }
// for(let i = 1 ; i<=5; i++){
//     let row = ""
//     for (let j=1; j<=i; j++){
//         row = row + i
//        }
//      console.log(row)

// }

// let n= 5
// for(let i = 0 ; i<n; i++){
//     let row = ""
//     for (let j=0; j<(n-i); j++){
//         row = row + (j+1)
//        }
//      console.log(row)

// }
// let n= 5
// for(let i = 0 ; i<n; i++){
//     let row = ""
//     for (let j=0; j<(n-i); j++){
//         row = row + "*"
//        }
//      console.log(row)

// }

// let n =5
// for(let i =0 ; i<n; i++){
//     let row = ""
//     for(let j=0; j<(n-i) ; j++ ){
//         row = row + "* "

//     }
//     console.log(row)
// }

// let arr = [1,2,3,4,5,6,7];
// let smallestNums = Infinity

// function largestNumber(){
//     for(let i =0; i<arr.length; i++){
//         if(arr[i]<smallestNums){
//            smallestNums = arr[i]
//         }
//     }
//     return smallestNums;
// }

// let nums = largestNumber();
// console.log(nums)

// let arr = [1, 2, 3, 4, 16, 5, 201, 6, 7, 11, 101, 501, 15];
// let largestNum = -Infinity;
// let secondlargestNum = -Infinity;
// let thirdlargestNum = -Infinity;

// function thirdLargestNumber() {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > largestNum) {
//             thirdlargestNum = secondlargestNum;
//             secondlargestNum = largestNum;
//             largestNum = arr[i];
//         } else if ( arr[i] > secondlargestNum && arr[i] !== largestNum) {
//             thirdlargestNum = secondlargestNum;
//             secondlargestNum = arr[i];
//         } else if (
//             arr[i] > thirdlargestNum &&
//             arr[i] !== secondlargestNum &&
//             arr[i] !== largestNum
//         ) {
//             thirdlargestNum =  arr[i];
//         }
//     }
//     return thirdlargestNum;
// }

// let nums = thirdLargestNumber();
// console.log(nums); // Output: 101

// let arr = [1, 2, 3, 4, 16, 5, 201, 6, 7, 11, 101, 501, 15];
// let largestNum = -Infinity;
// let secondlargestNum = -Infinity;
// let thirdlargestNum = -Infinity;

// function thirdLargestNumbers (){
//     for (let i = 0; i<arr.length; i++){
//         if( arr[i]>largestNum){
//             thirdlargestNum = secondlargestNum;
//             secondlargestNum = largestNum;
//             largestNum = arr[i]
//         }
//         else if(arr[i]>secondlargestNum && arr[i] !==largestNum){
//             thirdlargestNum = secondlargestNum
//             secondlargestNum = arr[i]

//         }
//         else if(arr[i]>thirdlargestNum && arr[i] !==secondlargestNum && arr[i] !== largestNum){

//             thirdlargestNum =arr[i]

//         }

//     }
//      return thirdlargestNum
// }

// let nums = thirdLargestNumbers();
// console.log(nums)

// n=5
// for(let i = 0 ; i<n;  i++){
//     let row = "";
//     for (let j=0; j<(n-i); j++){
//         row = row + (j+1)
//     }
//     console.log(row)
// }

// let count = 0;
// function countDigit(n){
//    if(n==0) return 1;
//    n = Math.abs(n)
//   while(n>0 ){
//   n = Math.floor(n/10)
//   count++
//     }
//     return count
// }

// let nums = countDigit(-1234567);
// console.log(nums);

// find the largst nuber in the array

// let arr = [1,2,3,4,5,6,7,9,11];

// let largestNum = -Infinity;

// function largestNums(){
//   for(let i = 0; i<arr.length; i++){
//     if(arr[i]>largestNum){
//       largestNum = arr[i]
//     }
//   }
//   return largestNum;
// }

// let nums = largestNums();
// console.log(nums)

// find the second largest Numbers
// let arr = [1,2,3,4,5,6,7,7];
// let largestNum = -Infinity;
// let secondLargestNum = -Infinity;
// function secondLargstNumber(){
//   for(let i = 0; i<arr.length; i++){
//     if(arr[i]>largestNum){
//       secondLargestNum = largestNum;
//       largestNum = arr[i]
//     }
//     else if(arr[i]>secondLargestNum&& arr[i] !==largestNum){
//       secondLargestNum=arr[i]
//     }
//   }
//   return secondLargestNum;
// }

// let nums = secondLargstNumber();
// console.log(nums)

// find the smallest numbers in the array

// let arr = [1,2,3,4,5,6,7,101,501]
// let smallstNums = Infinity
// function smallestNumber(){
// for(let i = 0; i<arr.length; i++){
//   if(arr[i]<smallstNums){
//     smallstNums = arr[i];
//   }
// }
// return smallstNums;
// }

// let nums = smallestNumber();
// console.log(nums)

// find the second samllest number in the array

// let arr = [1,1,2,3,4,5,6,7]
// let smallestNums = Infinity;
// let secondSmallestNums = Infinity;

// function smallestNumber(){
//   for (let i =0; i<arr.length; i++){
//     if(arr[i]<smallestNums){
//       secondSmallestNums = smallestNums;
//       smallestNums = arr[i];
//     }
//     else if(arr[i]<secondSmallestNums && arr[i] !==smallestNums){
//       secondSmallestNums = arr[i]
//     }
//   }
//   return secondSmallestNums;
// }

// let nums = smallestNumber();
// console.log(nums)

// find the digits in the number 12345

// let count = 0;
// function countDigit(n){
//   if( n===0) return 1;
//   if(n<0){
//     n = Math.abs(n)
//   }
//   while(n>0){
//     n= Math.floor(n/10);
//     count++
//   }
//   return count;
// }

// let numbers = countDigit(-55);
// console.log(numbers);

// n=5
// for(let i = 0; i<=n; i++){
//   let row = ""
//   for(let j = 0; j<(i+1); j++){
//     row = row + "*"

//   }
//   console.log(row);
// }

// let count = 0
// function countDigit(n){
// while(n>0){
//   n = Math.floor(n/10)
//   count++
// }
// return count
// }

// let nums = countDigit(12345);
// console.log(nums)

//  function reverseDigit(x){
//    let xCopy = x;
//    x < 0 ? -rev : rev
//    let rev = 0;
//   while( xCopy>0){
//   let rem =  xCopy%10;
//   rev = (10*rev)+rem;
//   xCopy=Math.floor( xCopy/10)
//  }
//    return rev;
// }
// let nums = reverseDigit(121);
// console.log(nums);

// count digit of the integer

// let count = 0
// function countDigit(n){
//   if(n===0) return 1;
//   if(n<0){
//     return Math.abs(n)
//   }
//   while(n>0){
//     n=Math.floor(n/10);
//     count++
//   }
//   return count;
// }

// let nums = countDigit(12345);
// console.log(nums);

// palindrome Number if number is same while reading left to right

// function isPalindrome(x){
//   let  xCopy = x
//   let rev =0
//   while(x>0){
//   let rem = x%10; //find the last digit of the numbers
//   rev = (10*rev)+ rem; //add last digit to in place of first digit
//   x = Math.floor(x/10)
// }
// if(rev===xCopy){
//   return true;
// }
// else return false

// }
// let nums = isPalindrome(121);
// console.log(nums)

// function fabnociSeries(n){
//  let a =0;
//   let b =1;
//  while(n>0){
//  let n = (a+b)%10 + 1
//  }
//  return n;

// }

// let nums = fabnociSeries(5);
// console.log(nums)

// remov the duplicates in the array

// let uniqueNums = x;

// let nums = [0,0,1,1,1,2,2,3,3,4];

// function removDuplicates(){
//   for(let i =0; i<nums.length; i++){

//   }
// }

// find the largest number in the array

// find the second second largest number

// print only even number from array;

// let arr=[1,2,3,4,5,6];
// for(let i = 0; i<arr.length;i++){
//   if(arr[i]%2===1){
//     console.log(arr[i])
//   }
// }

// let arr=[1,2,3,4,5,6];
// let evenNums=[]
// function evenNumbers (){
//   for(let i = 0; i<arr.length;i++){
//   if(arr[i]%2===0){
//     evenNums.push(arr[i])
//   }
// }
// return evenNums
// }
// let nums = evenNumbers();
// console.log(nums)

// n=5;
// for(let i=0;i<5 ; i++){
//  let rows ="";
//   for(let j=0; j<=i; j++){
//     rows=rows + (i+1)
//   }
//   console.log(rows)
// }

// write a function that returns count of a digits in number

// function countDigit(n){
//    let count = 0;
//   if(n===0) return 1
//   if(n<0){
//    n = Math.abs(n)
//   }

//   while(n>0){
//   n= Math.floor(n/10)
//     count++
//   }
//   return count
// }

// let nums = countDigit(12345);
// console.log(nums)

// function palindromeNumber(n){
//   let xCopy = n
//   let rev = 0;
//   if(x<0) return false;
//   while(n>0){
//     let rem = n%10;
//     rev = (10*rev)+rem;
//     n=Math.floor(n/10)
// }
// if(rev===xCopy){
// return true
// }
// else{
// return false
// } }

// let  nums = palindromeNumber(121);
// console.log(nums)

// function reverseInteger(n){
//   let nCopy = n;

//   if(n<0){
//      n=Math.abs(n)
//   }

//   let rev = 0;
//   while(n>0){
//     let rem = n%10;
//     rev=(10*rev)+rem;
//     n=Math.floor(n/10)
//    }
//   return (nCopy<0) ? -rev : rev
//   }
//   let nums = reverseInteger(12345);
//  console.log(nums)

// let arr = [1,1,1,2,2,3,3,4,5,6,7]
// function removDuplicates(){
//   let x = 0

//   for(let i = 0 ; i<arr.length; i++){
//     if(arr[i]>arr[x]){
//       x=x+1
//       arr[x] = arr[i]

//     }
//   }
//   return x+1
// }

// let nums = removDuplicates();
// console.log(nums);

// swap two numbers
// let a=10;
// let b=20;
// let temp = a;
// a=b;
// b=temp;
// console.log("a->",a,"b->",b)

// let arr = ["h","e","l","l","o"]
// function reverString(arr){
// let lngth = arr.length
// let halfLength = Math.floor(lngth/2)
// for(let i = 0 ; i <halfLength; i++){
// let temp  = arr[i];
//  arr[i]= arr[lngth-1-i]
// arr[lngth-1-i] = temp

// }
// return arr;
// }

// let nums = reverString(arr);
// console.log(nums);

// let arr = ["h","e","l","l","o"]
// function reverString(arr){
//   let l = arr.length;
//   let hL =Math.floor(l/2);
//   for (let i = 0 ; i<hL; i++){
//     let temp = arr[i];
//     arr[i]= arr[l-1-i];
//     arr[l-1-i] = temp;;

//   }
//   return arr;

// }

// let nums = reverString(["h","e","l","l","o","A","B","C"]);
// console.log(nums);

// function reversString(arr){
//   let l = arr.length
//   let halfLength = Math.floor(l/2)
//   for(let i =0; i<halfLength; i++){
//     let temp = arr[i];
//     arr[i]= arr[l-1-i]
//     arr[l-1-i] = temp
//   }
//   return arr
// }

// let nums = reversString(["h","e","l","l","o"])
// console.log(nums)

// let arr = [0,1,1,1,2,3,3,3,4,5,5,6]

// function duplicatesNums(){
//   let x = 0
//   for(let i = 0; i<arr.length; i++){
//     if(arr[i]>arr[x]){
//       x=x+1;
//       arr[x]=arr[i]
//     }

//   }
//   return x+1;
// }

// let nums = duplicatesNums();
// console.log(arr.slice(0,nums))

// find the count of the digit

// function countDigit(n){
//   let count =0
//   if(n===0) return 1
//   if(n<0){
//     n=Math.abs(n)
//   }
// while(n>0){
// n = Math.floor(n/10);
// count++
// }
// return count;
// }

// let nums = countDigit(-12345);
// console.log(nums)

//   function reversString(n){
//   let nCopy = n
//   if(n<0){
//     n=Math.abs(n)
//   }
//   let rev = 0;
//   while(n>0){
//    let rem = n%10;
//     rev = (10*rev)+rem;
//     n=Math.floor(n/10);
//   }
//     return (nCopy<0)? -rev : rev
// }

// let nums = reversString(-12345);
//  console.log(nums);

// remov duplicates

// let arr = [0,1,1,1,2,2,2,3,4,5,5,6]

// function removDuplicates(){
//   let x = 0;
//   for(let i = 0 ; i<arr.length; i++){
//     if(arr[i]>arr[x]){
//       x=x+1
//       arr[x]=arr[i]
//     }
//   }
//   return x+1
// }

// const nums = removDuplicates();
// console.log("unique elments",arr.slice(0,nums))

// for(let i =0; i<nums; i++){
//   console.log(arr[i])
// }

// function sayHello(n){

// print n to 1 in recursion methods
//   if(n<1){
//     return;
//   }

//   console.log(n);

//   n=n-1
// sayHello(n)
// }

// sayHello(5);

// let n = 6;
// for(let i=1; i<n ; i++){
//   console.log(i)
// }

// // print 1 to n in rcursion methods

// function printOneToN(){
//   if(n<1){
//     console.log(n);
//     n = n+1
//   }
//   printOneToN(n)
// }

// printOneToN(5)

// const arr = [1,2,3,4,5,6,7]

// let largestNum = -Infinity;
// let secondLargestNum = -Infinity;

// function secondLargestNumber(){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]>largestNum){
//            secondLargestNum =largestNum
//            largestNum= arr[i]
//         }

//     }
//     return largestNum
// }

// const nums = secondLargestNumber();
// console.log(nums)

// check the number is odd or even
// function isEvenOdd(x){

//     let num = x%2
//     if(num===0){
//        return "number is even"
//     }
//     else{
//         return "number is odd"
//     }

// }
// let numbers = isEvenOdd(100);
// console.log(numbers)

// write a function that returns sum of all negative numbers in array
// let arr = [1,2,3,-4,5,6,7,-8,-9,10,11,-13,-17,-19,21]
// let count =0

// function sumOfNegativeNumbers(){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]<0){
//             count++
//         }
//     }
//     return count
// }
// let nums = sumOfNegativeNumbers();
// console.log(nums)

// find the largest number in the array
// const arr = [1,2,3,4,5,6,7]

// function evenNumber(){
//     let evenNums =[]

//      for(let i = 0; i<arr.length; i++){
//         if(arr[i]%2===0){
//             evenNums.push(arr[i])

//         }
//      }
//      return evenNums
// }

// let nums = evenNumber();
// console.log(nums)

// write hello world 5 times

// function helloProgram(){
//     for(let i=0;i<6;i++){
//         console.log(i,"hello world")
//     }
// }
// let nums = helloProgram();
// console.log(nums)

// find the largest nummber in the array

// let arr = [ 0, -1,-2,-3,-4,-5,-6]
// let largestNums = -Infinity;

// function largestNumber(){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>largestNums){
//             largestNums = arr[i]
//         }
//     }
//     return largestNums
// }

// let nums = largestNumber();
// console.log(nums)

// find the second largst Number in the array

// let arr = [1,2,3,4,5,6,7];
// let largestNums = -Infinity;
// let secondLargestNum = -Infinity;
// function secondLargestNumber(){
//     for (let i = 0; i<arr.length; i++){

//         if(arr[i]>largestNums){
//              secondLargestNum = largestNums
//             largestNums=arr[i]
//         }
//         else if(arr[i]>secondLargestNum && arr[i] !=largestNums){
//             secondLargestNum=arr[i]
//         }
//     }
//     return secondLargestNum
// }

// let nums = secondLargestNumber();
// console.log(nums)

// for (let i = 0; i<5;i++){
//     let row = ""
//     for(let j = 0; j<=i; j++){
//         row = row+(i+1)
//     }
//     console.log(row)
// }

// find the count of the numbers

// function countOfNumbers(n){
//     let count = 0;
//     if(n===0) return 1;
//     if(n<0){
//         n = Math.abs(n)
//     }

//     while(n>0){
//     n = Math.floor(n/10)
//         count++;
//     }
//     return count;
// }

// let nums = countOfNumbers(-12345);
// console.log(nums)

// const arr = [ -1,0,1,2,3,4,5,6,7]

// let smallestNum = Infinity;

// function smallestNumbers(){
//     for (let i =0; i<arr.length; i++){
//         if(arr[i]<smallestNum){
//           smallestNum = arr[i]
//         }

//     }
//     return smallestNum
// }

// const nums = smallestNumbers();
// console.log(nums)

// const arr = [1,2,3,4,5,6,7]

// let largestNum = -Infinity;

// function largestNumber (){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]>largestNum){
//             largestNum = arr[i]
//         }
//     }
//     return largestNum
// }

// const nums = largestNumber();
// console.log(nums);

// const arr = [501,201,301,2100,200,101,201,2100,2500,700]

// let largestNum = -Infinity;
// let secondlargestNum = -Infinity;

// function secondLargestNumber (){
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>largestNum){
//         secondlargestNum = largestNum;
//         largestNum = arr[i]
//     }
//     else if(arr[i]>secondlargestNum && arr[i] !==largestNum){
//         secondlargestNum =arr[i];
//     }
// }
// return secondlargestNum;
// }

// let nums = secondLargestNumber();
// console.log(nums);

// let count = 0;

// function countDigit(n){
//     while(n>0){
//     n = Math.floor(n/10)
//     count ++
//     }
//     return count;

// }

// let nums = countDigit(1);
// console.log(nums)

// i = 1

// while(i<=5){
//     console.log(i);
//     i++
// }

// function palindroneNums(n){
//     let rev = 0
//     while(n>0){
//      n = Math.floor(n%10);
//      rev = (10*rev)+rem;

//     }

// }

// const arr = [1,2,3,4,5]

// function evenOddNum(){
//     let result = []
//     for(let i = 0; i<arr.length; i++){
//       if(arr[i]%2===0){
//         result.push(arr[i])
//       }
//     }
//     for(let i =0; i<arr.length; i++){
//       if(arr[i]%2 !==0){
//         result.push(arr[i])
//       }
//     }

//     return result;
// }

// const nums = evenOddNum();
// console.log(nums);

// const arr = [1,2,3,4,5]

// function getEvenOdd(){
//   let result = []
//   for(let i = 0; i<arr.length; i++){
//     if(arr[i]%2 === 0){
//       result.push(arr[i])
//     }}
//     for(let i = 0; i<arr.length; i++){
//       if(arr[i]%2 !==0){
//         result.push(arr[i])
//       }
//     }
//     return result;
// }

// const nums = getEvenOdd();
// console.log(nums)

// check if numbers are palindrome or not
// function palindromeNums(x){
//   let xCopy = x;
//   if(x<0) return false
//   let rev = 0
//   while(x>0){
//     let rem = x%10
//     rev= (10*rev) + rem;
//     x = Math.floor(x/10)

//   }
//   if(rev===xCopy){
//     return true
//   }
//   else return false
// }

// const nums = palindromeNums(-151);
// console.log(nums)

// function isNumberPalindrome(n){

//   let nCopy = n
//   n = Math.abs(n)
//   let rev = 0;

//   while(n>0){
//     let rem = n%10;
//     rev = (10*rev)+rem;
//     n = Math.floor(n/10)

//   }
//   if(nCopy>0){
//     return rev
//   }
//   else return -rev
// }

// const nums = isNumberPalindrome(12145);
// console.log(nums)

// const arr = [1,1,2,3,4,5,5,6,7,7]

// function findDuplicatesNums(){
//   let x = 0
//   for(let i = 0; i<arr.length; i++ ){
//     if(arr[i]===arr[x]){
//      arr[x] =arr[i]
//     }
//   }
//   return x+1
// }

// const nums = findDuplicatesNums();
// console.log(nums);

// const arr = [0,1,1,1,2,2,3,4,5,6,7]
// function findDublicateNums(arr){
//   let x = 0;
//   for(let i = 0; i<arr.length; i++){
//     if(arr[i]>arr[x]){
//       x=x+1
//       arr[x] = arr[i]

//     }
//   }
//   return arr.length= x+1
// }

// const nums= findDublicateNums(arr);
// console.log(nums,arr)

// const arr = [0,1,1,2,3,3,4,5,5,6,6,6,7]

// function findDuplicates(arr){
//   let x = 0
//   for(let i = 0; i<arr.length; i++){
//     if(arr[i]>arr[x]){
//       x=x+1;
//       arr[x] = arr[i]
//     }
//   }
//   return arr.length = x+1
// }

// const nums = findDuplicates(arr);

// console.log(nums,arr);

// let a = 100;
// let b = 101;

// let temp = a;

// a = b;
// b = temp;
// console.log("value of a is",a, "and value of b is", b)

// let arr = ["h","e","l","l","o"];
// function rverseString(arr){
//   let len = arr.length;
//   let halfLen = Math.floor(len/2);

//   for(let i = 0; i<halfLen; i++){
//   let temp = arr[i];
//   arr[i]  = arr[len-1-i];
//   arr[len-1-i] = temp;
//   }
//   return arr;
// }

// const nums = rverseString(["h","e","l","l","o"]);
// console.log(nums);

// let string = "hello";

// function reversStrings(){

//   let arr = [];
//   for(let i=0; i<string.length;i++){
//     arr[i] = arr[str];
//     let temp = arr[i];
//     arr[i] = arr[]
//   }
// }

// var arr =[1,1,2,2,3,3,4,4,5,5,6,6,7,7,11,11,12,12,16,15,16]

// function findSingelNums(){
//   let xor = 0
//   for(let i =0 ; i<arr.length; i++){
//     xor = xor^arr[i]
//   }
//   return xor
// }
// const nums = findSingelNums();
// console.log(nums)

// const arr = [0,1,1,2,2,2,3,3,3,4,4,4,5,6]

// function findDuplicates(arr){
//   let x = 0;
//   for(let i = 0; i<arr.length; i++){
//     if(arr[i]>arr[x]){
//       x = x+1
//       arr[x] = arr[i]
//     }
//   }return arr.length= x+1
// }

// const nums = findDuplicates(arr);
// console.log(arr)

// const arr = ["h","e","l","l","o"]

// function reverseString(arr){
//   let length = arr.length
//   let halfLength = arr.length/2
//   for(let i  = 0; i<halfLength; i++){
//   let temp = arr[i];
//   arr[i] = arr[length-1-i];
//   arr[length-1-i] = temp
//   }
//   return arr;
// }

// const revresStrings = reverseString(["h","e","l","l","o"]);
// console.log(revresStrings);

// function func(num){
//   if(num==0) return
//   console.log(num);
//   num = num-1
//   func(num)
// }
// func(5);

// const arr = [1,1,1,2,2,3];

// function findDuplicates(){
//   let x = 0;
//   for(let i = 0;  i<arr.length; i++){
//     if(arr[i]>arr[x]){
//       x = x+1;
//       arr[x] = arr[i]
//     }

//   }

//    return arr.length= x+1

// }

// const nums = findDuplicates();
// console.log(nums,arr);
// let left = [1,3,4,5,2];
// let right = [ 11,15,21,51,101];
// function sortArray(arr) {
//     if (arr.length <= 1) return arr;

//     let mid = Math.floor(arr.length / 2);  // ✅ length spelling fix
//     let left = sortArray(arr.slice(0, mid));
//     let right = sortArray(arr.slice(mid));

//     return merge(left, right);
// }

// function merge(left, right) {
//     let res = [];
//     let i = 0;
//     let j = 0;

//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             res.push(left[i]);
//             i++;
//         } else {
//             res.push(right[j]);   // ✅ fix here
//             j++;
//         }
//     }

//     // ✅ Correct spread for remaining elements
//     return [...res, ...left.slice(i), ...right.slice(j)];
// }

// console.log(sortArray(arr));

// let arrLeft = [1,2,5,6,7,15,11];
// let arrRight = [ 51,21,121,123,125];

// function sortArray(arr){
//   if(arr.length<=1) return arr;
//   let mid = Math.floor(arr.length/2);
//   let arrLeft = sortArray(arr.slice(0,mid));
//   let arrRight = sortArray(arr.slice(mid));
//   return mergearr(arrLeft,arrRight)

// }

// function mergearr(arrLeft,arrRight){
//   let res=[];
//   let i=0;
//   let j=0;
//   while(i<arrLeft.length && j<arrRight.length){
//     if(arrLeft[i]<arrRight[j]){
//       res.push(arrLeft[i]);
//       i++
//     }
//     else{
//     res.push(arrRight[j])
//       j++
//     }
//   }
//   return[...res,...arrLeft.slice(i),...arrRight.slice(j)]
// }
// // let mergeArrays = mergearr(arrLeft,arrRight)
// let combined = [...arrLeft, ...arrRight];
// let sorted = sortArray(combined);

// console.log("Final Sorted:", sorted);

// function sayHello(num){
//   if(num==0) {
//     return
//   }

//   console.log(num);
//   num = num-1
//   sayHello(num)
// }
// let a =100;
// sayHello(a)

// function print (n){
//   if(n<1){
//     return
//   }
//   console.log(n);
//   n = n-1
//   print(n)
// }

// print(5)
// let n=5
// function print(x){
//   if(x>n){
//     return
//   }
//   console.log(x);
//   x =x+1
//   print(x)
// }
// print(1)

// function sumOfNumbers(n){
//   if(n==0) return 0;
//   return n + sumOfNumbers(n-1)
// }
// console.log((sumOfNumbers(5)))

// const arr = [1,2,3,4,5];

// function sum(n){
// if(n==0) return arr[n]

//   return arr[n] + sum(n-1)
// }

// console.log(sum(arr.length-1))
// const arr = [1,2,3,4,5]
// function sumOfOddNums(n){
//    if(n<0) return 0;
//   if(arr[n]%2 == 0){
//     return arr[n]+sumOfOddNums(n-1)
//   }
//   else{
//    return sumOfOddNums(n-1)
//   }
// }
// console.log(sumOfOddNums(arr.length-1))

// function factorialOfN(n){
// if(n===1) return 1  ;
// return n*factorialOfN(n-1)
// }

// console.log(factorialOfN(5));

// for(let i = 1; i<6;i++){
//     console.log(i);
// }

// find the largest numbers in the array

// const arr = [1,2,3,4,5,6,7]

// function largestNumbers(){
//     for(let i = 0; i<arr.length;i++){

//     }
// }
// count = 0
// function fetchData(){
//     console.log("API CALLS",count++)
// }

// function betterFunction(func,delay){
//     let timer;
//     let context = this;
//      args = arguments;
//     return function(){
//         clearTimeout(timer)
//        timer =setTimeout(()=>{
//         func.apply(arguments,context)
//        },delay)

//     }
// }
// const debounce = betterFunction(fetchData,300);
// debounce()

// function fib(n){
//    if(n<=1) return n;
//    return fib(n-1) + fib(n-2);
// }
// console.log(fib(5))

// function sayHello(num){
//    if(num===0) return;
//    console.log(num)
//    n = sayHello(num-1)

// }

// sayHello(5);

// const arr = [1,2,3,4,5,6,7];
// function sumOfOddNums(n){
//    if(n===0) return arr[n];
//    if(arr[n]%2 !==0){
//       return arr[n]+sumOfOddNums(n-1)
//    }
//    return sumOfOddNums(n-1)
// }
// console.log(sumOfOddNums(arr.length-1));

// const arr = [1,2,3,4,5];

// function sumOfNums(){
//    let count = 0
//    for(let i =0;i<arr.length;i++ ){
//       if(arr[i]%2 !==0){
//         count=count+ arr[i]
//       }
//    }
//    return count;
// }

// console.log(sumOfNums())

// const arr = [1,2,3,4,5];

// const findEvenNums=(n)=>{
//    if(n<0) return 0;
//    if(arr[n]%2===0){
//       return arr[n] + findEvenNums(n-1)
//    }
//    else{
//     return findEvenNums(n-1)
//    }
// }

// console.log(findEvenNums(arr.length-1))

// function sayHello(num){
//    if(num===0) return
//    console.log(num);
//    sayHello(num-1)
// }
// sayHello(5)

// function numsPrint(n){
//    if(n==0) return;
//    num = n-1
//    numsPrint(num);
//    console.log(n)

// }
// numsPrint(5)

// 5! = 5*4*3*2*1 //120

// function factorialNums(n){
//    if(n===1) return 1;
//    return n= n * factorialNums(n-1);
// }

// console.log(factorialNums(5));

// let arr = [1, 2, 3, 4, 5,6,7];
// function findNums(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == target) {
//       return i;
//     }
//   }
//   return -1;
// }

// const nums = findNums(arr, 2 );
// console.log(nums);

// const arr = [1,2,3,4,5,6,7]
// function checkNums(arr,target){
//    let low = 0;
//    let high =arr.length-1;

//    while(low<=high){
//       if(arr[mid]===target){
//          return mid;
//       }
//       else if(arr[mid]>target){
//          high = mid-1
//       }
//       else if(arr[mid]<target){
//          low = mid+ 1
//       }
//    }
//    return -1
// }

// const nums = checkNums(arr,5);
// console.log(nums)


// linear search
// const arr = [1,2,3,4,5,6,7]

// function findNums(arr,target){
//    for(let i=0;i<arr.length;i++){
//       if(arr[i]===target){
//          return i;
//       }
//    }
//    return -1
// }
// const nums = findNums(arr,7);
// console.log(nums)

// binary search
// const arr = [1,2,3,4,5,6,7]
// function findNums(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;
//     while (low <= high) {
//     let mid = (Math.floor(low + high)/2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] > target) {
//        high = mid - 1;
//     } else if(arr[mid]<target){
//        low = mid + 1;
//     }
//     else{
//        return -1;
//     }
//   }
  // }

// const nums = findNums(arr, 6);
// console.log(nums);
// check if number is palindrone

// function isPalindroneNums(n){
//    let isPalindroneNumbers = n;
//    let rev = 0;
//    while(n>0){
//       let rem = n%10;
//       rev = (10*rev)+rem;
//       n=Math.floor(n/10)
//    }

//    return rev ===isPalindroneNumbers ? true: false

// }
// const nums = isPalindroneNums(123);
// console.log(nums)

// const arr = [1,5,2,4,5,3,5,4,3,5,6,7,11,10,15,25,21,25];
// let largestNums = -Infinity;
// let secondLargestNums = -Infinity

// function findLargestNums(){
//    for(let i =0; i<arr.length; i++){
//       if(arr[i]>largestNums){
//          secondLargestNums=largestNums  ;
//          largestNums = arr[i];
//       }
//       else if(arr[i]>secondLargestNums && arr[i] !==largestNums) {
//          secondLargestNums = arr[i];
//       }
//    }
//    return secondLargestNums;
// }

// const nums = findLargestNums();
// console.log(nums)

// const arr = [1,3,2,2,5,5,6,11,7] 

// function findNums(arr,target){
//    for(let i = 0; i<arr.length; i++){
//       if(arr[i]===target){
//          return i
//       }
//    }
//    return -1
// }

// const nums = findNums(arr,11);
// console.log(nums)

// const arr = [1,2,3,4,5,6,7];

// function findNums(arr, target){
//    let low = 0;
//    let high = arr.length-1;
//    while(low<=high){
//       let middle = Math.floor((low+high)/2)
//       if(arr[middle] === target){
//          return middle
//       }
//       else if(arr[middle]>target){
//          high = middle-1
//       }
//       else if(arr[middle]<target){
//          low = middle+1
//       }
//       else{
//          return -1
//       }
//    }
   
// }

// const nums = findNums(arr,6);
// console.log(nums)

// const arr =[1,5,2,3,6,7];

// function findNums(arr){
//    let n =arr.length
//    for(let i =0; i<n-1; i++){
//       for(let j=0;j<n-1-i;j++){
//          if(arr[j]>arr[j+1]){
//             let temp = arr[j]
//            arr[j]=arr[j+1]
//             arr[j+1]=temp
           

//          }
//       }

//    }
//    return arr
// }
// const nums = findNums(arr);
// console.log(nums)

// let a =10;
// let b =20;
// let temp=10;
// a=b;
// b=temp
// console.log(a,b)

// 5! = 5*4*3*2*1;

// function factorialNumms(n){
   
//    if(n==0) return 1;
//    return n * factorialNumms(n-1)
// }

// const nums = factorialNumms(5);
// console.log(nums)   

// const arr = [1,2,3,4,5,6]
// function findSums(n){
//   if(n<0) return 0;
//   if(arr[n]%2===0){
//     return arr[n] + findSums(n-1)
//   }
//   else{
//     return findSums(n-1)
//   }

// }

// const nums = findSums(arr.length-1);
// console.log(nums); 
    
// 5!=5*4*3*2*1

// function Nums(n){
//   if(n===0) return 0;
//   return n + Nums(n-1)

// }

// const numbers = Nums(5);
// console.log(numbers)

// const arr = [1,2,3,4,5,6,7];

// function findSumOfEvenNums(){
//   let count =0
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//     count = count +arr[i]
//     }
//   }
//   return count;
// }
// const nums = findSumOfEvenNums();
// console.log(nums)

const arr = [1,2,3,4,5,6,7];

function evenNums(n){
  if(n<1) return 0;
  if(arr[n]%2===0){
    return arr[n] + evenNums(n-1)
  } 
  else{
    return evenNums(n-1)
  }
}

const nums = evenNums(arr.length-1);
console.log(nums)