selectAll();
function selectAll(){
    const className = document.getElementsByClassName('formSelect_1');
    var changeEvent = document.createEvent("HTMLEvents");
 changeEvent.initEvent("change", true, true);
 
    for(const allselect1 of className){
        allselect1.value = 2;
    } 
   for(const allselect of className){
        allselect.dispatchEvent(changeEvent);
    } 

    setTimeout(signWait, 2000);
    function signWait(){
 const signBtn = document.getElementById('sign');
 signBtn.click();
    
}

   

    setTimeout(sigclick, 3000);

function sigclick(){
  getElementByXpath("//html/body/div[5]/div[3]/div/button/span").click() ;
  function getElementByXpath(path) {
     return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
   }
}
 



setTimeout(encryptBtnHandle, 4000);
  function encryptBtnHandle(){

    const encryptBtn = document.getElementById('encrypt');
    encryptBtn.click();

   
  }


setTimeout(saveBtnHandle, 5000);
 function saveBtnHandle(){

   const saveBtn = document.getElementById('save');
   saveBtn.click();
 }


}