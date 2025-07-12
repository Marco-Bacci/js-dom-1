// dichiaro variabili del bottone e del img
const accendi = document.getElementById(`button`);
const bulb = document.getElementById('lamp')
// creo un event listener al click del bottone
accendi.addEventListener('click', function(){
  if (bulb.src.includes(`img/yellow_lamp.png`)){
    bulb.src= `img/white_lamp.png`
    accendi.innerText = `ACCENDI`
  }
  else{
    bulb.src= `img/yellow_lamp.png`
    accendi.innerText = `SPEGNI`
   
  }
});

