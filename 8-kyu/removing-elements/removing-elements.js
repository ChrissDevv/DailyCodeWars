function removeEveryOther(arr){
  // creata a variable thats going to hold new items
  let newArr = []
  // create a loop and conditional that checks if the index is divisble by 2
  for( let i = 0; i < arr.length; i++){
    if( i % 2 === 0){
  // push items into newArr
      newArr.push(arr[i])
    }
  }
  return newArr
  
}