
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function encriptar(){
     var encriptarText = document.getElementById('input-texto').value; 
     var textEncriptado = encriptarText.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat'); 
     document.getElementById("msg").value = textEncriptado 
     document.getElementById("input-texto").value=" "; 
     console.log(textEncriptado);
    }

 function desencriptar(){
      var desencriptarText= document.getElementById ("input-texto").value; 
      var textDesencriptado= desencriptarText.replace(/enter/gi, "e"). replace(/imes/gi, "i"). replace(/ai/gi, "a").replace(/ober/gi,"o").replace(/ufat/gi, "u"); 
      document.getElementById("msg").value= textDesencriptado 
      document.getElementById("input-texto").value=""; 
      
    } 
      
    function copiar(){ var copyText = document.getElementById("msg"); copyText.select(); 
    document.execCommand("Copy"); document.getElementById("msg").value=" "; }