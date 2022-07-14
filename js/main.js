const grigliaDom= document.getElementById('griglia');

for( i=0; i<100; i++){
 const quadratoGrglia = document.createElement('div');
 quadratoGrglia .classList.add ('quadrato');
 quadratoGrglia .addEventListener('click',
       function(){
             this.classList.toggle('bg-color')


       }
 
 
 );

 
 quadratoGrglia.append([i]);
 grigliaDom.append(quadratoGrglia);
}