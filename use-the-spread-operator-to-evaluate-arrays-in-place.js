const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;


(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);


//A sintaxe de propagação (Spread) permite que um objeto iterável, como um array ou string, seja expandida em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para literais de array) sejam esperados ou uma expressão de objeto seja expandida em locais onde zero ou mais pares de chave-valor (para literais de objeto) são esperados.

