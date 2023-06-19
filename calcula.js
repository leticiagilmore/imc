//capturar os dados do formulario

const pega = document.querySelector('#formulario')

pega.addEventListen('submit', function(event){
event.preventDefaut();
});