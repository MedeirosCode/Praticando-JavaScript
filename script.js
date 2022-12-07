const produtos = ["Computador", "Telefone", "Mouse", "Teclado"];

console.log("--------------")

// Quais produtos temos?
console.log("Nossos Produtos: " + produtos);

console.log("--------------")

// Mostrando quantos produtos tem na lista
console.log("Quantidade de produtos: " + produtos.length);

console.log("--------------")

// Tirando produto Mouse da lista e retornando apenas os que sobraram.
console.log("Removendo Mouse: " + produtos.filter((p) => p !== "Mouse"));

console.log("--------------")

// Procurando algum determinado produto na lista:
const procurarProduto = produtos.find(p => p == "Computador");
if (procurarProduto) {
  console.log(`Procurando produto ${procurarProduto}: Produto em estoque!`);
} else {
  console.log("produto em falta");
}

console.log("--------------")

// Removendo o segundo item da lista
console.log("Removendo segundo item: " + produtos.filter((p) => p !== "Telefone" , "Mouse"));

console.log("--------------")

// numeros em ordem
const numbers = [1, 3, 5, 7, 0, 9];
console.log("Numeros em ordem: " + numbers.sort());

console.log("--------------")

// removendo primeiro numero
numbers.shift();
console.log("Nova lista de numeros: " + numbers);

console.log("--------------")

// ordem reversa
console.log("Inverter ordem: " + numbers.reverse());

console.log("--------------")

// criando data
let data = "06/12/2022";
const [dia, mes, ano] = data.split("/");
console.log(" Dia:" + dia);
console.log(" Mes:" + mes);
console.log(" ano:" + ano);

console.log("--------------")
