
selectAll();
function selectAll(){
  const link =document.getElementsByClassName('seatsLayout');
  link[0].click();
  
  
  const myTimeout = setTimeout(select, 1000);
  
  function select() {
  document.getElementById('select-bogie').value = 4;
  const link1 =document.getElementsByClassName('seat');
  for(i=0; i<=20; i++){
      link1[i].click();
  
  const continueBtn = document.getElementsByClassName('continue-btn');
  continueBtn[0].click();
  }
    clearTimeout(myTimeout);
  }

}