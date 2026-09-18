var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");
 function controlarLicuadora() {
    if(estadoLicuadora === "apagada") {
        estadoLicuadora = "encendida";
        console.log("encendida");
    } else {
        estadoLicuadora = "apagada";
        console.log("apagada");
    }
}