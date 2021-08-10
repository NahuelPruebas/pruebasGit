function saludo(mensaje) {
    return "Saludos para todos los dias, hoy es : " + mensaje;
}
 
let diaDeLaSemana = "Lunes";
 
document.body.textContent = saludo(diaDeLaSemana);
