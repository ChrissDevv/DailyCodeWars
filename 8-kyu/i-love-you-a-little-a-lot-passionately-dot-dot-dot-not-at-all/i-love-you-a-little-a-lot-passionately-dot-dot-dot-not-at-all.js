function howMuchILoveYou(nbPetals) {
    let totalPedals = nbPetals % 6;
  let phrase = ['I love you', 'a little', 'a lot', 'passionately','madly', 'not at all'];
  if (totalPedals === 0){
    return phrase[5];
  }else{
    return phrase[totalPedals - 1];
  }
   }
  
​