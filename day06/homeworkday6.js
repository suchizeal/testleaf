
// //number count
// // function countOfNumbers(input){



// //     const given = [2,3,4,5,6,2,3,4,5,7,2]

// //     let k = input;
// //     let count=0;
    
// //     for(let index=0;index<=given.length;index++){
       
// //         if(given[index]===k){
// //             count++;
// //         }
// //     }
// //     return count;
// // }

// // console.log(countOfNumbers(2));


// //factorial

// function factorial(num){

//     let given=1;
//     for(let i=1;i<=num;i++){

//         given=given*i;
        
//     }
//     return given;
// }
// console.log(factorial(5));

// //2 aray number sum

// function findPairsWithTargetSum(arr, target) {
//     let pairs = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 pairs.push([i, j]);
//             }
//         }
//     }
    
//     return pairs;
// }

// // Example usage:
// const array = [2, 7, 11, 15, 1, 8, 3];
// const targetSum = 9;
// const result = findPairsWithTargetSum(array, targetSum);
// console.log(result)


//fibonacci
// function fibonacci(num){

//     let i = 0;
//     let j = 1;
//     let k
//     for(let index=0;index<=num;index++){
//         k = i+j;
//         i=j;
//         j=k;
//     }
//     return k;

// }
// console.log(fibonacci(5));

//1+2=3,3+3=6,6+4=10 

// function sumOfNumbers(num){

//     let sum = 0;
//     for(let i = 1; i<=num;i++){

//         sum = sum+i;
//         console.log(i,sum);
//     }
//     return sum;
// }
// console.log(sumOfNumbers(4));

// function compareArrays(arr1,arr2){

//     let arr3=[]
//     for(let i = 0;i<arr1.length;i++){

//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]===arr2[j]){
                
//                     arr3.push(arr1[i])
//                 }
//             }
//         }

//         return arr3;
//     }

// console.log(compareArrays([2,3,4,5],[3,4,5,6]));


let promise = new Promise((resolve, reject) => {

    let number = Math.random();
    if(number > 0.5) {
        resolve({ msg: "Resolved successfully", number });
    } else {
        reject({ msg: "Rejected", number });
    }

}) ;

//Consuming the promise
promise.then(result => console.log(result))   //Operation successful - if resolved
.catch(error => console.log(error));    //Operation failed -if rejected