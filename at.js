const {log}= console;

const indiceDeCartas = [
    "El Loco",
    "El Mago",
    "La Sacerdotiza",
    "La Emperatriz",
    "El Emperador",
    "El Papa",
    "Los Amantes",
    "El Carro",
    "La Justicia",
    "El Ermitaño",
    "La Rueda de la fortuna",
    "La Fuerza",
    "El Colgado",
    "La Muerte",
    "La Templanza",
    "El Diablo",
    "La Torre",
    "La Estrella",
    "La Luna",
    "El Sol",
    "El Juicio",
    "El Mundo",
    ...["Oro","Copa","Basto","Espada"]
        .map(generarPorPalo)
        .reduce((estado,arrayDeUnPalo) => [ ...estado , ...arrayDeUnPalo ],[])
]

function generarPorPalo(palo){
    return [...Array(10).keys()]
        .map(n=>n+1)
        .concat(["Paje","Caballo","Rey","Reina"])
        .map(n=>`${n} de ${palo}`)
}

log({indiceDeCartas})

class Carta {
    constructor (posicion, estaAlDerecho) {
        this.nombre = indiceDeCartas[posicion]
        this.arcano = esArcanoMayor(posicion) ? "mayor" : "menor"
        this.orientacion = estaAlDerecho ? "al derecho" : "al reves"
    }
}

function esArcanoMayor(posicion){
    return posicion < 22 
}

function esArcanoMenor(posicion){
    return !esArcanoMayor(posicion)
}

// esta funcion devuelve una instancia de CartaTest completamente al azar
function obtenerCarta(){
    // obtener 1 numero del 0 al 155
    max = 156
    const numeroCrudo = Math.random();
    log({numeroCrudo})
    const numeroCartaDecimal = numeroCrudo * max
    log({numeroCartaDecimal})
    const numeroCarta = Math.floor(numeroCartaDecimal);
    log({numeroCarta});
    // para numeros impares marcamos que salio al reves, para el resto al derecho
    restoMod2Carta = numeroCarta % 2
    const estaAlDerecho = restoMod2Carta === 0
    log({estaAlDerecho})
    // si salio par la carta es el numero dividido 2, impar restar 1 y dividir despues
    // let posicionCarta = estaAlDerecho ? numeroCarta / 2 : (numeroCarta-1) / 2
    posicionCarta = (numeroCarta - restoMod2Carta ) / 2
    /*if (estaAlDerecho){
        posicionCarta = numeroCarta / 2
    } else {
        posicionCarta = (numeroCarta - 1 ) / 2
    }/**/
    log({posicionCarta})
    // juntar los resultados en una instancia de CartaTest
    return new Carta(posicionCarta,estaAlDerecho)
}

log(obtenerCarta());