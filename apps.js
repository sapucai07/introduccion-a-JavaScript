document.addEventListener("DOMContentLoaded", function () {
    let boton = document.getElementById("hijo");

    boton.addEventListener("click", function () {
        alert("Hola");
    });

    boton.addEventListener("dblclick", function () {
        alert("Chau");
    });
});