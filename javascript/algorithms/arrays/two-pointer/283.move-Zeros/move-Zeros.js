
//Input: nums = [0,1,0,3,12]
//Output: [1,3,12,0,0]

// Brute Force Approach 

function moveZero(arr){
   let result = [] ;

   // push the non zero's 
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] !== 0){
            result.push(arr[i]);
        }
    }

    // add in last zeros 
    while(result.length < arr.length){
        result.push(0);
    }

   return result ;
}


/// Optimal Approach 

function moveZero(arr){
     let nonzero = 0 ;  // we can denote  as pointer1 (becouse using two pointer approach)

     for(let i = 0 ; i<arr.length ; i++){
        if(arr[i] != 0){
            arr[nonzero] = arr[i]  // overwrite the zero's 
            nonzero++ ;
        }
     }

     for(let i = nonzero ; i<arr.length ; i++){
        arr[i] = 0 ;
     }

     return arr ;
}

const result = moveZero([0,1,0,3,12]);
console.log(result);