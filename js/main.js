const grigliaDom = document.getElementById('griglia');
const Inizia = document.getElementById('play');
Inizia.addEventListener('click',
    function () {
        const difficoltà = document.getElementById('Difficoltà').value;

        switch (difficoltà) {
            case Facile:
            default:
                quadratoGriglia = 100;
                break;

            case Medio:
                quadratoGriglia = 80;

                break;

            case Difficile:
                quadratoGriglia = 49;

                break;

        }
    }


)


for (i = 1; i <= 100; i++) {
    creaGriglia();
}
/**** */
const listaBombe = [];

for (i = 1; i < 16; i++) {
    const bomba = generatoreBombe(1, 16);
    listaBombe.push(bomba);
}
console.log(listaBombe);
/******************************/














/*funzione per creare quadrati e al click aggiunge o togle la class bg-color*/
function creaGriglia() {

    const quadratoGrglia = document.createElement('div');
    quadratoGrglia.classList.add('quadrato');
    quadratoGrglia.addEventListener('click',
        function () {
            this.classList.toggle('bg-color')
            console.log(this.innerHTML);

        }
    );

    quadratoGrglia.append([i]);
    grigliaDom.append(quadratoGrglia);




}

/*funzione per generare numeri random*/

function generatoreBombe(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


