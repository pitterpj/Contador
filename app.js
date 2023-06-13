// Inicializamos un contador a cero
let count = 0;
// Guardamos el valor inicial y los botones
const value = document.querySelector("#value");

// Toodos los botones
const btns = document.querySelectorAll(".btn");

//Damos un evento a cada boton
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    //Le damos los estilos
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    //Lo imprimimos 
    value.textContent = count;
  });
});