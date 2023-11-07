let palo = ('Oros, Copas, Espadas, Bastos');
let valor;
let numeros = [];
maxPalos = 4;
maxValor =10;


class Carta {
    constructor(palo, valor) {
        this.palo = palo;
        this.valor = valor;
    }
    darValor(palo, valor) {
        if (palo < 5 && valor < 10) {
            Carta.palo = palo;
            Carta.valor = valor;
        } else {
            console.log("Error");
        }

    }
    toString(Carta) {
        for (let i = 0; i < maxPalos; i++) {
            for (let j = 0; j < 40; j++) {
                let nuevaCarta = new Carta(i, j);
                console.log(nuevaCarta);
                console.log(i, "de", Carta.valor[j]);
            }
        }
    }

}
function generarBaraja() {
    let baraja = [];
    for (let i = 0; i < maxPalos; i++) {
        for (let j = 0; j < 40; j++) {
            let nuevaCarta = new Carta(i, j);
            baraja.push(nuevaCarta);
        }
    }
    return baraja;
}
generarBaraja();

