//Printing odd numbers using Arrow function
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const odd = num.filter((num)=>
    num%2===1);
    console.log(odd);

//Convert all the strings to title caps in a string array using arrow function
var arr=["the world is having beautiful contents"]
function titleCaseArr(arr){
    arr.forEach((str, ind) => {
        arr[ind]=str.toLowerCase().split(' ')
        .map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
    });
    return arr;
}
console.log(titleCaseArr([...arr]));

// Sum of all numbers in an array IIFE
(function(){
    var numbers = [1,2,4,6,7];
    var sum =0;
    for (var i=0; i<numbers.length; i++){
    sum=sum+numbers[i];
}
console.log(sum);
})();

//Return Primen numbers in array using anonymous function
const arr2 = [2,3,4,5,6,7,8,9];
const isPrime = function(n) {
    if (n===1){
        return false;
    }else if (n===2){
        return true;
    }else{
        for(let x=2; x<n; x++){
            if(n%x===0){
                return false;
            }
        }
        return true;
    };
    };
    const filterPrime = arr =>{ 
        const filtered = arr2.filter(el=>!isPrime(el));
        return filtered;
    };

console.log(filterPrime(arr2));

//removing duplicates from an array
let array = [1,2,3,4,1,2,3,4,5];
let uniqueArray= array.filter(function(item, index){
    return array.indexOf(item) == index;
});
console.log(uniqueArray);

//Rotate array by k times
let arrayRotate= [1,2,3,4,5];
let k=2;
let rotatedArray= arrayRotate.splice(-k,k).concat(arrayRotate);
console.log(rotatedArray);


 