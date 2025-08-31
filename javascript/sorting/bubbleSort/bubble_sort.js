// --- start with left side and check if the element is greator then next one -- Swap them -- until meets requirments .

function bubbleSort (arr ){
  const n = arr.length ;
  let isSwapped ;

  for(let i = 0 ; i < n-1 ; i++){
    for(let j = 0 ; j <n-i-1 ; j++){
        if(arr[j] > arr[j+1]){
              
            //swap Element 
             [arr[j] , arr[j+1] ] =  [arr[j+1] , arr[j]] ;

             isSwapped = true ;
        }

    }

    if(!isSwapped){
        break ;
    }
  }

  return arr ; 

}

/// Functio output is 
const sortedArray = bubbleSort([ 22 , 23 , 24 , 21]);
console.log("Sorted Array is :" , sortedArray);

