// --- be can use two apporach to solve this question

function secondLargest(arr) {
   let n = arr.length ;
   let largest = -Infinity , secondLargest = -Infinity ;
   for(let i = 0 ; i < n; i++){
      if(arr[i] > largest ){
        secondLargest = largest ;
        largest = arr[i]
      }

      else if( arr[i] > secondLargest && arr[i] !== largest ){
        secondLargest = arr[i] ;
      }
   }

   return secondLargest ;
}

const secondLargestArray = secondLargest([2 , 1 , 4 , 22 , 5]);
console.log(secondLargestArray)