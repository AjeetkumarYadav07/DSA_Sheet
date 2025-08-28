// the problems is  Calculate the sum of all elements
//Input: [1, 2, 3, 4, 5]
 //Output: 15

 function sumofElements(arr , n ) {
   let sum = 0 ;

   for(let i = 0 ; i < n ; i++){
     sum += arr[i];
   }
   return sum ;
 }

 const arr = [1 , 2 , 3, 4 , 5] ;
 const n = arr.length ;
 const result = sumofElements(arr , n );
 console.log(result);