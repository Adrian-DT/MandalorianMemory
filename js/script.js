import { reiniciarMemory, asignarClass } from "./functions.js";

export let abiertos = 0;
export let per1, per2;
export let parejas = 0;
export let seleccionadas = [];
export let fallos = 0;

asignarClass();

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < 16; i++) {
  imgs[i].addEventListener("click", (event) => {
    if (parejas < 8 && !event.target.classList.contains("emparejada")) {
      //guardo en un array las dos imágenes seleccionadas para que no se "pueda"
      //hacer click dos veces seguidas a la misma imagen
      seleccionadas[abiertos] = event.target;
      if (seleccionadas[0] != seleccionadas[1]) {
        if (abiertos == 0) {
          //extraigo la primera clase, que es la que lleva el nombre del personaje
          per1 = event.target.classList[0];
          event.target.src = `img/${per1}.jpg`;
          abiertos++;
        } else if (abiertos == 1) {
          //extraigo la primera clase, que es la que lleva el nombre del personaje
          per2 = event.target.classList[0];
          event.target.src = `img/${per2}.jpg`;
          abiertos++;
          if (per1 == per2) {
            abiertos = 0;
            parejas++;
            document
              .getElementsByClassName(per1)[0]
              .classList.add("emparejada");
            document
              .getElementsByClassName(per1)[1]
              .classList.add("emparejada");
            //Necesito este timeout porque, si no, salta el alert antes de que cambie el src
            if (parejas == 8) {
              setTimeout(() => {
                alert("¡Enhorabuena! Has completado el memory de Star Wars.");
              }, 200);
            }
          } else {
            fallos++;
            setTimeout(() => {
              abiertos = 0;
              document.getElementsByClassName(per1)[0].src = "img/logo.jpg";
              document.getElementsByClassName(per1)[1].src = "img/logo.jpg";
              document.getElementsByClassName(per2)[0].src = "img/logo.jpg";
              document.getElementsByClassName(per2)[1].src = "img/logo.jpg";
            }, 500);
          }
          //Hay que "reiniciar" las seleccionadas porque, si no, no se puede volver a hacer
          //click a la misma justo después de comprobarla
          seleccionadas[0] = null;
          seleccionadas[1] = null;
        }
      }
    }
  });
}

reiniciar.addEventListener("click", reiniciarMemory);

