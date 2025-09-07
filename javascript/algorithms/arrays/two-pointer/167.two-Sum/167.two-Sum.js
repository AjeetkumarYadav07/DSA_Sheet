// Example 1:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

function twoSum(arr , target){
   let left = 0 , right = arr.length-1 ;

   while(left < right){
    let sum = arr[left] + arr[right] ;  // 2+7 = 9 

    if(sum === target){  // return index value 
        return [left +1 , right  +1]  // but we use +1 becouse in give index1 = 1 ;
    }

    else if(sum < target){
        left++ 
    }

    else{
        right--
    }
   }
   return [] ;
}

const result = twoSum([2 , 7 , 11 , 15 ] , 9);
console.log(result)