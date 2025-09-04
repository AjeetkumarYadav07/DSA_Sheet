// Problem link : https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/ 

function isSorted (arr , n ) {
   let count = 0 ;
    for(let i = 0 ; i < n ; i++){
        if(arr[i] < arr[i+1]){
            count++
        }
    }

    return count <= 1 ;
}

const arr = [3,4,5,1,2] ;
const arr2 = [2,1,3,4] ;
const n = arr.length ;
const result = isSorted(arr , n);