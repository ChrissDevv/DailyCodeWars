let capitals = function (word) {
  let arr = []
  for(let i = 0; i < word.length; i++){
    if(word.charAt(i).toUpperCase() === word.charAt(i) ){
      arr.push(i);
    }
  }
  return arr
};