
 var pantalla = document.getElementById('pantalla');
 var borrar = document.getElementById('borrar');
 var suma = document.getElementById('suma');
 var resta = document.getElementById('resta');
 var multiplicacion = document.getElementById('multiplicacion');
 var division = document.getElementById('division');
 var igual = document.getElementById('igual');
 var uno = document.getElementById('uno');
 var dos = document.getElementById('dos');
 var tres = document.getElementById('tres');
 var cuatro = document.getElementById('cuatro');
 var cinco = document.getElementById('cinco');
 var seis = document.getElementById('seis');
 var siete = document.getElementById('siete');
 var ocho = document.getElementById('ocho');
 var nueve = document.getElementById('nueve');
 var cero = document.getElementById('cero');
 var imprimirCod = document.getElementById('imprimirCodigo');

 function fixPantalla() {
    if(pantalla.value=="1820085601"){
        pantalla.value="";
    }
 }

uno.onclick = function(e){
    fixPantalla();
    pantalla.value += '1';
}
dos.onclick = function(e){
    fixPantalla();
    pantalla.value += '2';
}
tres.onclick = function(e){
    fixPantalla();
    pantalla.value += '3';
}
cuatro.onclick = function(e){
    fixPantalla();
    pantalla.value += '4';
}
cinco.onclick = function(e){
    fixPantalla();
    pantalla.value += '5';
}
seis.onclick = function(e){
    fixPantalla();
    pantalla.value += '6';
}
siete.onclick = function(e){
    fixPantalla();
    pantalla.value += '7';
}
ocho.onclick = function(e){
    fixPantalla();
    pantalla.value += '8';
}
nueve.onclick = function(e){
    fixPantalla();
    pantalla.value += '9';
}
cero.onclick = function(e){
    fixPantalla();
    pantalla.value += '0';
}
suma.onclick = function(e){
    fixPantalla();
    pantalla.value += '+';
}
resta.onclick = function(e){
    fixPantalla();
    pantalla.value += '-';
}
multiplicacion.onclick = function(e){
    fixPantalla();
    pantalla.value += '*';
}
division.onclick = function(e){
    fixPantalla();
    pantalla.value += '/';
}
igual.onclick = function(e){
    pantalla.value = eval(pantalla.value);
}
borrar.onclick = function(e){
    pantalla.value = "";
}
imprimirCod.onclick = function(e){
    pantalla.value = "1820085601";
}