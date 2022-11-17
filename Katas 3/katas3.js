//Exercício 1
function xRunning() {

    let lista = ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']

    for (let cont = 0; cont < lista.length; cont++) {

        lista[cont] = 'x'

        if (cont > 0){
            lista[cont-1] = '-'
        }

        console.log(lista)
    }

}
xRunning()


//Exercício 2

function vowelsCounte(lista) {

    let array = [];

    for (let cont = 0; cont < lista.length; cont++) {

        let contador = 0;

        for (let str = 0; str < lista[cont].length; str++) {


          let letrasAtual = lista[cont][str].toLowerCase()


            if (letrasAtual == 'a' || letrasAtual == 'e' || letrasAtual == 'i' || letrasAtual == 'o'|| letrasAtual == 'u' ) {
                contador++

            }
        }
          array.push(contador)
    }
    return array
}

console.log(vowelsCounte(["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"]))



//Exercício 3

function stringTripletGroup (string){

      let array = []

    for(let cont = 0; cont < string.length; cont += 3){

              if(cont % 3 == 0){
                array[array.length] = string[cont] + (string[cont + 1] == undefined ? ' ':string[cont + 1]) + (string[cont + 2] == undefined ? ' ':string[cont + 2])

              }


    }

    return array
}
console.log(stringTripletGroup ('Os três mosqueteiros'))





// Exercício 4


function dominantPet(lista) {

    let array = []

    let contarDog = 0;
    let contarCat = 0;

    for (let i = 0; i < lista.length; i++) {


        if (lista[i].toUpperCase() == 'DOG') {
            contarDog++


        } else if (lista[i].toUpperCase() == 'CAT') {
            contarCat++
        }
    }

    if (contarDog > contarCat) {
        return 'DOG!'

    } else if (contarCat > contarDog) {
        return 'CAT!'

    } else if (contarDog === contarCat) {
        return 'DRAW!'
    }

}
console.log(dominantPet(["DoG", "cat", "dOg", "cat", "Dog", "caT"]))



// Exercício 5


function  divisibleList (lista, numero){
    let divisiveis = [];

    for (let cont = 0; cont < lista.length; cont++){

         if(lista[cont] % numero == 0){
            divisiveis.push(lista[cont])
         }


    }
    return divisiveis

}
console.log(divisibleList ([14, 25, 32, 50, 35, 30], 5))




//Exercicio 6

function trustMeOrNot(bool, numero) {
    let num = [];
    for (let cont = 0; cont < numero; cont++) {

        num.push(bool)


    }
    return num
}

console.log(trustMeOrNot(true, 8));




// Exercício 7

function changeLampStatus(lista) {
    let lampada = []
    for (let cont = 0; cont < lista.length; cont++) {

        if (lista[cont] == true){
            lampada.push(false)


        } else if (lista[cont] == false){
            lampada.push(true)


        }

    }
    return lampada

}
console.log(changeLampStatus([false, false, true, false, true, true, true]));





// //Exercício 8

function gradeAverage(lista) {
    let soma = 0;
    for (let cont = 0; cont < lista.length; cont++) {
        soma += lista[cont]

    }
    return `A média das notas é: ${(soma / lista.length).toFixed(2)}`
}
console.log(gradeAverage([6.0, 5.5, 6.7, 8.0, 10, 10, 7.1]))



//Exercício 9


function canvasDeliveriesPercentage(lista){
    let contador = 0;
    for (let cont = 0; cont < lista.length; cont++){
        contador += lista[cont]
    }
    return `A porcentagem total de entregas atingida é: ${((contador / 100) * 100).toFixed(2)}%, pois foram distribuidos 100 pontos e o aluno conseguiu apenas ${((contador / 100) * 100).toFixed(2)}% `
}
console.log(canvasDeliveriesPercentage([3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7]))



// Exercício 10


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




