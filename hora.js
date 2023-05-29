const hora = document.getElementById('hora');
const minutos =document.getElementById('minuto')
const segundo = document.getElementById('segundo');

const relogio = setInterval(function time(){
    var data = new Date();
    let hr = data.getHours();
    let min = data.getMinutes();
    let segun = data.getSeconds();

    hora.textContent = hr;
    minutos.textContent =min;
    segundo.textContent =segun;

})