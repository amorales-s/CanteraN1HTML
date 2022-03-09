const main = () => {
  let elementosAcordeon = document.getElementsByClassName("acordeon");
  for (let i =0; i<elementosAcordeon.length; i++) {
    elementosAcordeon[i].addEventListener("click",function(){
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.display=="block") {
        panel.style.display="none";
      }else{
        panel.style.display="block"
      }
    });
  }

let fondo = document.getElementsByTagName("body")[0];
let corazon = document.getElementsByClassName("corazon")[0];

corazon.addEventListener('change', cambiarColor);
  
function cambiarColor(){
  if(corazon.value=="2"){
    fondo.style.backgroundColor="white";
  }
  if(corazon.value=="3"){
    fondo.style.backgroundColor="rgb(0, 200, 151)";
  } 
  if(corazon.value=="4"){
    fondo.style.backgroundColor="pink";
  }
  if(corazon.value=="5"){
    fondo.style.backgroundColor="grey";
  }
}

}


