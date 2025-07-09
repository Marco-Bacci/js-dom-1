// dichiaro variabili del bottone e del img
const accendi = document.getElementById(`button`);
const bulb = document.getElementById('lamp')
// creo un event listener al click del bottone
accendi.addEventListener('click', function(){
  bulb.src= `img/yellow_lamp.png`
});
  
