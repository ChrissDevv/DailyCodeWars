function smash (words) {
  // create a variable to hold the looped items into a single string
  let sentence = ''
  for( let i = 0; i < words.length; i++){
    sentence += words[i]
  // if i isnt equal to the last word im the index add space
    if( i !== words.length -1){
  // if so add space
       sentence+= ' '
    }
      
  }
 return sentence
};
​