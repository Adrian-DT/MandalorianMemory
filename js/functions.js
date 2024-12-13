import { seleccionadas, parejas, abiertos, per1, per2, fallos } from "./script.js";
export function reiniciarMemory(event) {
    event.preventDefault();
    let imgs = document.querySelectorAll("img");
    imgs.forEach(img => img.src = "img/logo.jpg");
    imgs.forEach(img => img.className = "");
    asignarClass();
    seleccionadas[0] = null;
    seleccionadas[1] = null;
    parejas = null;
    abiertos = null;
    per1 = null;
    per2 = null;
    fallos = null;
}

const NOMIMG = [
    "mando1", "mando2", "mando3", "mando4",
    "mando5", "mando6", "mando7", "mando8"
];

export function asignarClass() {
    let clasesAsignadas = new Array(8).fill(0);
    let imgs = document.querySelectorAll("img");
    imgs.forEach(img => {
        let aleatorio;
        do {
            aleatorio = Math.floor(Math.random() * 8);
        } while (clasesAsignadas[aleatorio] >= 2);
        img.classList.add(NOMIMG[aleatorio]);
        clasesAsignadas[aleatorio]++;
    });
}
