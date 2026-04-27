function generarTablas(){

let contenedor = document.getElementById("tablas");
let valor = document.getElementById("numeroTabla");

let contenido = "<table class='tabla' id='tablas'><thead><tr><th colspan='3' class='tabla__titulo'></th></tr><tr><th class='tabla__th'>Factor</th><th class='tabla__th'>Operación</th><th class='tabla__th'>Resultado</th></tr></thead><tbody>"

let tabla = valor.value;

if(tabla===""){
    alert("valor ingresado está vacío")
}

    for (let i = 1; i <= 12; i++) {
        let resultado = tabla * i;

            contenido += "<tr class='tabla__fila'><td class='tabla__factor'></td><td class ='tabla_op'>"+(tabla + "x" + i + "</td><td class = 'tabla_res'>"+"= " + resultado)+"</td></tr>";
    }
    contenido += '</tbody></table>'
    contenedor.innerHTML = contenido;
}