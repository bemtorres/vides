
//Version 0.2

// fetch send
function send(){

var code = document.getElementById('code').value;
var total = document.getElementById('total').value;
var tipo = document.getElementById('tipo').value;

// function uva(code,litros,n,tipo){
//   this.code = code;
//   this.litros = litros;
//   this.n = n;
//   this.tipo = tipo;
// }

var url = 'http://uvas.cittsb.cl/paso3?cod='+code+'&total='+total+'&tipo='+tipo;

fetch(url)
  .then(resp => {    
    return resp.text();
  })
  .then(result => {
    
    let p =JSON.parse(result);
    console.log(p);

    document.getElementById("contenido").innerHTML = result;

    if(result=="OK"){
      console.log("Enviado correctamente");
        snackbarUp('Message Ok..');
    }
    if(result=="500"){
      console.log("Error en parametros");
      snackbarUp('Error 500');
    }
  })
  .catch(error =>{
    console.log("fail :" + error.message);
    snackbarUp('Fail, wrong data');
  });
}

// Snackbar
function snackbarUp(message) {
    var x = document.getElementById("snackbar");
    x.innerHTML = message;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

