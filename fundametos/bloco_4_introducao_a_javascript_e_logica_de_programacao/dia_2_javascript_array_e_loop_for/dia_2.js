// // 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

  /* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  for (let i = 0; i< numbers.length; i += 1) {
  console.log(numbers[i]); */ 

 // 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

 /*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

 let soma = 0;

 for (let i = 0; i<numbers.length; i+=1){
   soma += numbers[i];
   }

   console.log(soma); */
   

   // 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

 /*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

 let soma = 0;

 for (let i = 0; i<numbers.length; i+=1){
   soma += numbers[i];
 }
  let resultado = soma / numbers.length

 console.log(resultado) */

 // 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

 /* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let soma = 0;

 for (let i = 0; i<numbers.length; i+=1){
   soma += numbers[i];
 }

 let resultado = soma / numbers.length;
   
 if(resultado > 20){
    console.log("valor maior que 20");
 } else
  console.log("valor menor ou igual a 20"); */

  // 5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let maior = 0

  for(let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > maior){
       maior = numbers[index]
    }
  }
  console.log(maior)



 
