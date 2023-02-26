import cipher from './cipher.js';
/*Creo variables const para los botones cifrar y descifrar y a través
del document.getElementById indicamos qué elementos son los que estamos
llamando. */
const btnCifrar = document.getElementById("cifrar");
const btnDescifrar = document.getElementById("descifrar");

/*Llamamos al botón cifrar previamente definido, a través del método
addEventListener, indicando que al dar 'clic' se obtendrá el mensaje cifrado
el cual se obtiene del número elegido en el offset, el mensaje del usuario
y se muestra en la segunda caja de texto*/
btnCifrar.addEventListener("click", function(){
  const offset = document.getElementById("offset").value;
  const msgI = document.getElementById("msgI").value;
  const msgF = cipher.encode(+offset, msgI);
  document.getElementById("msgF").value = msgF;
  console.log(+offset,msgI,msgF);
});

/*Llamamos al botón descifrar a través de addEventListener, indicando que al dar 
'clic' se obtendrá el mensaje descifrado el cual se obtiene del número elegido en 
el offset, el mensaje del usuario y se muestra en la segunda caja de texto*/
btnDescifrar.addEventListener("click", function(){
  const offset = document.getElementById("offset").value;
  const msgI = document.getElementById("msgI").value;
  const msgF = cipher.decode(+offset, msgI);
  document.getElementById("msgF").value = msgF;
  console.log(+offset,msgI,msgF);
});

console.log(cipher);