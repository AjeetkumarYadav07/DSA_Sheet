
function selectionSort(arr){
  const n = arr.length ;  // length of array .

   let minValue ;  // assume mininum Value
  for(let i = 0 ; i < n-1 ; i++){
      minValue = i ;  
    for(let j = i+1 ; j < n ; j++){
        if(arr[j] < arr[minValue] ) minValue = j ;
    }

    if(minValue !== i){
        [arr[i] , arr[minValue]] = [arr[minValue] , arr[i]];
    }
  }

  return arr ;
}

const sortedArray = selectionSort([7 , 2 , 4, 5, 1 , 3]) ;
console.log("sorted Array is " , sortedArray );