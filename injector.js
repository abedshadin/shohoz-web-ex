
selectAll();

function selectAll(){

  const link =document.getElementsByClassName('seatsLayout');
  link[1].click();
  
  
  const myTimeout = setTimeout(select, 1000);
  
  function select() {
  
  const link1 =document.getElementsByClassName('seat');
  for(i=300; i<=500; i++){
      link1[i].click();
  
 
  }


  
    
  }
  
  }


