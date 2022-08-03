
let edad = confirm("Confirmo que soy mayor de edad para ingresar al sitio (+18).").toString();
if (edad === "true") {
    alert("Gracias por confirmar")

} else {

    window.location.href = "https://eliasdtorres.github.io/Trabajo_Final_RevolucionDigital/error.html";

}