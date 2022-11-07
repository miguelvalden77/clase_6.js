
// foreach()
let numbers = [2, 6, 7, 8, 9, 12]

numbers.forEach((e)=>{
    console.log(e)
})

const parImpar = (arr)=>{

    arr.forEach((ele, index) => {
        if(ele % 2 === 0){
            console.log(`${ele} es par, tiene indice ${index}`)
        } else{
            console.log(`${ele} es impar, tiene indice ${index}`)
        }
    })

}

parImpar(numbers)


// sort 
let familia = ["Miguel", "Tete", "Pablo", "Estrella"]

// 1. 
familia.sort()
console.log(familia)

let numeros = [34, 2, 67, 23, 33, 6]

// 2.
numeros.sort((a, b)=>{
    return b - a
})
console.log(numeros)



let personas = [
    {
        nombre: "Juanpe",
        nota: 8
    },
    {
        nombre: "Pepe",
        nota: 5
    },
    {
        nombre: "Luis",
        nota: 6
    }
];

// 3.
personas.sort((a, b)=>{

    if(a.nota > b.nota){
        return -1
    } else if(a.nota < b.nota){
        return 1
    } else{
        return 0
    }

})

console.log(personas)



// Ejercicios

    // sort
    // 1. Haz una función que reciba un array de números como parámetro. La función debe devolver dicho array pero ordenado de mayor a menor


    // 2. Tomando la misma función que el ejercicio anterior, haz que la función reciba dos parámetros: El mismo array de números y un string que puede ser "down" si se quiere ordenar el array de menor a mayor y "up" de mayor a menor


    // 3. Haz una función que reciba como parámetro un array de strings y tiene que devolver dicho array ordenado alfabéticamente


    // 4. Haz una función que reciba como parámetro un array de objetos y tiene que devolver dicho array ordenado por la calificación numérica de mayor a menor

    let alumnos = [
        {
            nombre: "Miguel",
            nota: 6
        },
        {
            nombre: "Lucía",
            nota: 8
        },
        {
            nombre: "Luis",
            nota: 7.5
        },
        {
            nombre: "Juanpe",
            nota: 10
        }
    ]


    // foreach

    // 1. Dado un array, saluda a todos añadiendo Hola a su nombre. NO ES UNA FUNCIÓN
    let amigos = ["Marcos", "Marta", "Alba", "Lucia", "Carlos"]


    // 2. Haz una función que reciba como parámetro un array de números y lo devuelva multiplicando los numeros por 2


    // 3. Tomando la función anterior, ahora haz que si los números son impares los multiplique por 2 y si son pares los divida entre 2.
