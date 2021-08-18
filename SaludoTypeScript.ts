function saludo(mensaje) {
    return "Saludos para todos los dias, hoy es : " + mensaje;
}
 
let diaDeLaSemana = "Martes";
let diaDeLaSemanaMiercoles = "Miercoles";

 
document.body.textContent = saludo(diaDeLaSemana);
