import cipher from './cipher.js';
/*Creo variables const para que funciones los botones cifrar y descifrar
*/
const btnCifrar = document.getElementById("cifrar");
const btnDescifrar = document.getElementById("descifrar");

btnCifrar.addEventListener("click", function(){
  const offset = document.getElementById("offset").value;
  const msgI = document.getElementById("msgI").value;
  const msgF = cipher.encode(+offset, msgI) ;
  document.getElementById("msgF").value = msgF;
});
btnDescifrar.addEventListener("click", function(){
  const offset = document.getElementById("offset").value;
  const msgI = document.getElementById("msgI").value;
  const msgF = cipher.decode(+offset, msgI);
  document.getElementById("msgF").value = msgF;
})

console.log(cipher);