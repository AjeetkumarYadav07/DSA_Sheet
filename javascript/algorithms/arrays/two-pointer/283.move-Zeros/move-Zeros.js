
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

const result = moveZero([0,1,0,3,12]);
console.log(result);