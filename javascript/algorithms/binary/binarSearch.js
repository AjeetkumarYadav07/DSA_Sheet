// --- Binary search is mostUseful searching alogrithm work on  --- Sorted Array only -- TC = long(n) ;
function binarySearch(arr , target) {
   let n = arr.length ; 
   let st = 0 ;
   let end = n-1 ;

    // itrate array 
   while(st <= end){
    let mid = Math.floor((st+end) / 2) ;

    //case one 
    if(arr[mid] === target){
        return mid ;
    }

    else if(target > arr[mid]){ // search right 
           st = mid+1 ;
    }

    else {
        end = mid-1 ;
    }
   }

   return -1 ;
}

const searchArray = binarySearch([1 , 2 , 5 , 7 , 9 , 22], 5 )
console.log(searchArray)