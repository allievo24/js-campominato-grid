const grigliaDom= document.getElementById('griglia');

for( i=1; i<=100; i++){
 creaGriglia();
}


const listaBombe=[];

 for (i=1; i<16; i++){
    generatoreBombe();

 }

console.log(generatoreBombe)



 const bomba = generatoreBombe(listaBombe,1,16);
 listaBombe .push (generatoreBombe);















/*funzione per creare quadrati e al click aggiunge o togle la class bg-color*/ 
function creaGriglia(){

    const quadratoGrglia = document.createElement('div');
    quadratoGrglia .classList.add ('quadrato');
    quadratoGrglia .addEventListener('click',
          function(){
                this.classList.toggle('bg-color')
                console.log(quadratoGrglia);
   
          }
    );
   
    quadratoGrglia.append([i]);
    grigliaDom.append(quadratoGrglia); 
}

/*funzione per generare numeri random*/

function generatoreBombe( min,max){
    
    return Math.floor(Math.random() * ( max - min + 1)) + min
}