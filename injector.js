
selectAll();

function selectAll(){

  const link =document.getElementsByClassName('seatsLayout');
  link[3].click();
  
  
  const myTimeout = setTimeout(select, 1000);
  
  function select() {
  
  const link1 =document.getElementsByClassName('seat');
  for(i=0; i<=800; i++){
      link1[i].click();
  
 
  }


  
    
  }

  }


