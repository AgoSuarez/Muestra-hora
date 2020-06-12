const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
let dia = 0;
function ObtenerHora() {
  const hora = new Date();
  document.getElementById("hora").innerHTML =
    hora.getHours() > 9 ? hora.getHours() + ":" : "0" + hora.getHours() + ":";
  document.getElementById("minutos").innerHTML =
    hora.getMinutes() > 9
      ? hora.getMinutes() + ":"
      : "0" + hora.getMinutes() + ":";
  document.getElementById("segundos").innerHTML =
    hora.getSeconds() > 9 ? hora.getSeconds() : "0" + hora.getSeconds();
  if (dia != hora.getDate()) {
    document.getElementById("fecha").innerHTML = hora
      .toLocaleString("es-ES", options)
      .toUpperCase();
  }
  dia = hora.getDate();
}

intervalo = setInterval(() => {
  ObtenerHora();
}, 1000);
