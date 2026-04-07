function correct(string){
  let result = ''
  for(let i = 0; i < string.length; i++){
    if (string.charAt(i) === '5'){
      result += 'S';
    } else if(string.charAt(i) === '0'){
      result += 'O';
    } else if(string.charAt(i) === '1'){
      result += 'I';
    } else {
      result += string.charAt(i);
    }
  }
  return result;
}