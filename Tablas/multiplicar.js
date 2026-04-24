function generarTablas(){

let contenedor = document.getElementById("tablas");
let valor = document.getElementById("numeroTabla");

let contenido = "<table><thead><tr><th></th></tr><tr><th>Factor</th><th>Operación</th><th>Resultado</th></tr></thead></tbody>"
let tabla = valor.value;

if(tabla===""){
    alert("valor ingresado está vacío")
}

    for (let i = 1; i <= 12; i++) {
        let resultado = tabla * i;

    // Imprimimos con el formato solicitado: 3x1=3
            contenido += "<tr class='tabla__fila'><td class='tabla__factor'></td><td class ='tabla_op'>"+(tabla + "x" + i + "</td><td class = 'tabla_res'>"+"= " + resultado)+"</td></tr>";
    }
    contenido += '</tbody></table>'
    contenedor.innerHTML = contenido;
}