function updateLight(current) {
  //create a conditional stating if current is a color return the following one
  if( current === 'green'){
    return 'yellow';
  }else if( current === 'yellow'){
    return 'red';
  }else{
    return 'green';
  }
  }
​