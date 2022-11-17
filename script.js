// Desenvolva uma função que recebe um parâmetro:

// 1. lista, um array com várias strings com uma das seguintes letras: "R", "Y", "G". 

// Estas letras podem estar em maiúsculo ou minúsculo e representam as cores do semáforo.

// E deve exibir no console um novo array com a conversão destas letras para as seguintes palavras:

// "R" = "Stop!"

// "Y" = "Attention!"

// "G" = "Go!"



function shouldIGo(lista) {

    let str = [] 

    for (let cont = 0; cont < lista.length; cont++){
        
        if(lista[cont].toUpperCase() == 'R'){
            str.push('Stop!')

        }else if(lista[cont].toUpperCase() == 'Y'){
            str.push('Attention!')

        }else if(lista[cont].toUpperCase() == 'G'){
            str.push('Gol!')
            
        }
    }
    return str

}
console.log(shouldIGo(["R", "r", "G", "y", "G", "Y", "g"]))
