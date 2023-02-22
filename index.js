function getPin(){
    const pin =generatePin();
    const pinString=pin + '';
    if(pinString.length===4){
        return pinString;

    }
    else{
        return getPin();
    }
}


function generatePin(){
 const random=Math.round(Math.random()*10000);
 return random;
}
document.getElementById('generate-pin').addEventListener('click',function(){
  const pin=getPin();
  const displayPinField=document.getElementById('display-pin');
  displayPinField.value=pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
const number=event.target.innerText;
const typeNumberField=document.getElementById('typed-number');
const previousTypedNumber=typeNumberField.value;
if(isNaN(number)){
  if(number==='C'){
    typeNumberField.value='';
  }
  else if(number==='<'){
       const digit=previousTypedNumber.split('');
       digit.pop();
       const remainingDigit =digit.join('');
       typeNumberField.value=remainingDigit;
  }
}
    else{
      
       
       const newTypedNumber=previousTypedNumber+number;
        typeNumberField.value=newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField=document.getElementById('display-pin');
    const currentPin=displayPinField.value;

    const typeNumberField=document.getElementById('typed-number');
    const typeNumber=typeNumberField.value;
    const pinSuccessMessage=document.getElementById('pin-success');
    const pinFailure=document.getElementById('pin-failure');
    if(typeNumber===currentPin){
       
        pinSuccessMessage.style.display='block';
        pinFailure.style.display='none';
    }
    else{
      
       pinFailure.style.display='block';
       pinSuccessMessage.style.display='none';
    }
})