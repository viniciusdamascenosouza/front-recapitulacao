function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");


for (let c = 0; c < listaDeTeclas.length; c++) {
  const tecla = listaDeTeclas[c];

  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };
}

// UTILIZANDO WHILE
// let contador = 0;

// while (contador < listaDeTeclas.length) {
//   const tecla = listaDeTeclas[contador];

//   const instrumento = tecla.classList[1];

//   const idAudio = `#som_${instrumento}`;

//   tecla.onclick = function () {
//     tocaSom(idAudio);
//   };

//   contador = contador + 1;
// }
