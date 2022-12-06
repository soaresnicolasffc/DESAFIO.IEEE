let nome_pessoa = [
    
    {nome: "Neto", idade: 15},
    {nome: "Dayana", idade: 22},
    {nome: "Samuel", idade: 19},
    {nome: "Ana", idade: 16},
    {nome: "Jefferson", idade: 25},
    {nome: "Gilvan", idade: 28},
    {nome: "João", idade: 19},
    {nome: "Maria", idade: 20},
    {nome: "Nalva", idade: 58},
    {nome: "Lívia", idade: 13},
    {nome: "Nícolas", idade: 18}  
]

/*- Percorrer um array de objetos contendo uma série de nomes e idades e colocar os nomes que começam com a primeira letra do seu nome em um novo array contendo 
somente os nomes*/

let inicial = "N"
let soma = 0
let inicial_igual = nome_pessoa.filter(individuo => individuo.nome.substring(0,1) === inicial)

let resultado = inicial_igual.map(individuo => {

    soma += individuo.idade
    return individuo.nome
})

/*- Calcular a média das idades das pessoas que começam com a primeira letra do seu nome, e imprimir o resultado.*/

let media = soma / inicial_igual.length

/*Imprimir o resultado*/

console.log(resultado)
console.log("média: ", media)