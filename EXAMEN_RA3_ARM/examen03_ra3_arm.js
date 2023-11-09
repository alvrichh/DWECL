function Carta(palo, valor) {
    if (palo >= 1 && palo <= 4 && valor >= 1 && valor <= 10) {
        this.palo = palo;
        this.valor = valor;
    } else {
        console.log("No son valores válidos para una carta");
    }
    this.darValor = function (palo, valor) {
        if (palo >= 1 && palo <= 4 && valor >= 1 && valor <= 10) {
            this.palo = palo;
            this.valor = valor;
        } else {
            console.log("No sirven los valores");
        }
    }
    this.toString = function () {
        const palos = ['Oros', 'Copas', 'Espadas', 'Bastos'];
        return (this.valor + " de " + palos[this.palo - 1]);
    }
}
function generarBaraja(){
    const baraja = [];
    for(let palo = 1; palo <=4; palo++){
        for(valor = 1; valor <=10; valor++){
            let nuevaCarta = new Carta(palo,valor);
            baraja.push(nuevaCarta);
        }
    }
    return baraja;
}
function mostrarBaraja(baraja) {
    for (let i = 0; i < baraja.length; i++) {
        console.log(baraja[i].toString());
    }
}
const miBaraja = generarBaraja();

mostrarBaraja(miBaraja);

let miCarta = new Carta(1, 1);
console.log(miCarta.palo);

/*
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
*/
