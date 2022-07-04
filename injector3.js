



























selectAll();

function selectAll() {

  const link = document.getElementsByClassName('seatsLayout');
  link[2].click();


  const myTimeout = setTimeout(select, 1000);

  function select() {
    const link1 = document.getElementsByClassName('seat');


    for (i = 0; i <= 500; i++) {
      link1[i].click();


    }




  }

}