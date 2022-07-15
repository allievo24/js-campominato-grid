const grigliaDom = document.getElementById('griglia');
const Inizia = document.getElementById('play');
Inizia.addEventListener('click',
    function () {
        const difficoltà = parseInt(document.getElementById('Difficoltà').value);

        switch (difficoltà) {
            case 1:
            default:
                quadratoGriglia = 100;
                break;

            case 2:
                quadratoGriglia = 80;

                break;

            case 3:
                quadratoGriglia = 49;

                break;

        }
    }


);   


for (i = 1; i <= 100; i++) {
    creaGriglia();
}
/**** creo numeri a caso e verifico che siano univoci*/
const listaBombe = [];
let bomba;
for (i = 1; i<=16; i++) {
    const bomba = generatoreBombe(1, 100);
    if(listaBombe.includes(bomba)==false)
    listaBombe.push(bomba);
    
}
console.log(listaBombe);
console.log(bomba);


/******************************/












/*funzione per creare quadrati e al click aggiunge o togle la class bg-color*/
function creaGriglia() {

    const quadratoGrglia = document.createElement('div');
    quadratoGrglia.classList.add('quadrato');
    quadratoGrglia.addEventListener('click',
        function () {
            if (listaBombe.includes(i)){
                alert('seifinito su una bom')
            }else{
                alert('sei ancora in gio')
            }
            
            
            
            
            
            this.classList.toggle('bg-color')
            console.log(this.innerHTML);
           // this.innerHTML=bomba;

        }
    );

    quadratoGrglia.append([i]);
    grigliaDom.append(quadratoGrglia);
    
    
   





}

/*funzione per generare numeri random*/

function generatoreBombe(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


