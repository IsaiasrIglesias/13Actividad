document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault(); //Evita que la página se recargue

    //capturar datos
    let contactoExterno = document.getElementById("contactoExterno").value.trim();
    let NombreDelContacto = document.getElementById("NombreDelContacto").value.trim();
    let distanciaEnkm = document.getElementById("distanciaEnkm").value.trim();

    //validación básica
    if (contactoExterno === "" || NombreDelContacto === "" || distanciaEnkm === "") {
        alert("Todos los campos son obligatorios.");
        return;
    }
    //Verificación de variable numerica
    distanciaEnkm = parseInt(distanciaEnkm);
    if (isNaN(distanciaEnkm) || distanciaEnkm <= 0) {
        alert("Ingrese una Distancia valida. ");
        return;
    }

    let mensajedistanciaEnkm = "";
    if (distanciaEnkm >= 100) { distanciaEnkm = "Vive Demasiado lejos"; }
    else {
        if ((distanciaEnkm >= 10) && (distanciaEnkm <= 90)) {
            mensajedistanciaEnkm = "Distancia optima para acceder al empleo";
        } else { mensajedistanciaEnkm = "Contratado" }
    }

    //Mostrar datos en la página
    document.getElementById("resultado").innerText = `Contacto Externo: ${contactoExterno} ${NombreDelContacto}, Distancia en km: ${distanciaEnkm}, ${mensajedistanciaEnkm}`;
});
