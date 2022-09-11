// if (1 != 0 ) {
//     console.log("sim")
// } else {
//     console.log("não")
// }

// var numero = 5

// switch (numero) {
//     case 2:
//         console.log("é 2")
//         break;

//     case 1:
//         console.log("é 1")
//         break;

//     default:
//         console.log("não sei qual é o número")
//         break;
// }

let quantidadePecas = 10
let nomePeca = "disco"
let pesoPeca = 100


if (quantidadePecas < 10) {
    console.log ("A lista de peças ainda tem espaço, é possível cadastrar mais peças")  
    
    if (nomePeca.length > 2) {
        console.log("nome ok") 

        if (pesoPeca >= 100) {
            console.log("Peça cadastrada com sucesso")            
        } else {
            console.log("Peso inferior a 100g, a peça não pode ser cadastrada")
        }

    } else {
        console.log("nome da peça inferior a 3 caracteres e não pode ser cadastrado")
    }

} else {
    console.log ("A lista de peças não tem espaço, NÃO possível cadastrar mais peças")
}