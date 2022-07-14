const grigliaDom= document.getElementById('griglia');

for( i=1; i<=100; i++){
 creaGriglia();
}






















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