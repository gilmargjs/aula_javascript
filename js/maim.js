/* introdução ao javascript*/

//var nome = "gilmar josé"
//var idade = 29;
//var idade2 = 10;
//var n1 = 49;
//var n2 = 17;
//var frase = 'japão é o melhor time do mundo'
//alert(idade + idade2)
//alert(nome + " tem " + idade + " anos ")
//console.log(nome)
//console.log(n1 * n2)
//console.log(n1 / n2)
//console.log(n1 + n2)
//console.log(idade + idade2)
//console.log(frase)
//console.log(frase.replace('japão','Brasil'))// trocar elemenro.
//console.log(frase.toUpperCase())            // Passar para Maiusculo.
//console.log(frase.toLocaleLowerCase())      // passar para Minusculo.

/* aula de Array */

//var lista = ['maçã', 'pera', 'laranja']
//console.log(lista)
//console.log(lista [1])                        //escolher n1 da lista obs: lista começa com n 0.
//lista.push('uva')                             //adiciona elemento na lista.
//console.log(lista)
//lista.pop()                                   //tira o ultimo elemento da lista.
//console.log(lista)
//console.log(lista.length)                     //quantidade de itens na lista.
//console.log(lista.reverse())                  // inverte a ordem da lista.
//console.log(lista.toString())                   //transforma de Array para string.
//console.log(lista.join(" - "))                  //transforma de Array para string e acrescenta elementos.

/*  Dicionario */

/*var fruta = { nome:'maçã', cor:'vermelha'}  = dicionário
console.log(fruta)          
console.log(fruta.nome)   escolher por nome.
console.log(fruta.cor)    escolher por cor.
*/

/* lista de Dicionário */
/*
var fruta = [{nome:'maçã',cor:'vermelha'}, {nome:'uva',cor:'verde'}]
console.log(fruta)
console.log(fruta[0].nome)*/


/*  condiçionais */

//if e else

/*
var idade = prompt('qual é sua idade ?')
if(idade >= 18){
    alert('maior de idade')
}else{
    alert('menor de idade')
}*/


/* laço de repetição*/

//while
/*
var count = 0;
while(count <= 5){
console.log(count);
count = count + 1;
}
*/

//for

/*
var count ;
for(count = 0;count <= 5;count++)
console.log(count)


var count ;
for(count = 0;count <= 5;count++)
console.log(`${count} + ${count} = ${count*count}`)


var count ;
for(count = 0;count <= 5;count++)
console.log(` ${count} ao quadrado é = ${count * count}`)
*/

/* data*/

//var d = new Date()
//console.log(d)
//console.log(d.getDay())// dia obs: como a contagem se inicia do zero é necesáario somar sempre 1.
//console.log(d.getHours())//hora
//console.log(d.getMinutes())//minutos
//console.log(d.getMonth())//mês obs: como a contagem se inicia do zero é necesáario somar sempre 1. 
//console.log(d.getMilliseconds())// milesegundoss.

/* função */

function soma (n1, n2){
return n1 + n2

}
function setReplace(frase,nome,novo_nome){
    return  frase.replace(nome, novo_nome)
}


alert(soma(20, 13))
alert(setReplace('vai japão', 'japão','Brasil'))