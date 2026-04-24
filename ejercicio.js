function listarNumeros(){
    for(let i = 0; i <= 3; i++){
        console.log(i);
    }
}

function ejecutar(numEjercicio){
    switch(numEjercicio){
        case 1:
            listarNumeros();
            break;
        case 2:
            listaNumerosReversa();
            break;
        case 3:
            listarPares();
            break;
        case 4:
            listaImpares();
            break;        
    }
}

function listaNumerosReversa(){
    for(let i = 3; i > 0; i --){
        console.log(i);
    }
} 

function listarPares(){
    for(let i = 0;i <=10; i += 2){
        console.log(i);
    }
}

function listaImpares(){
    for(let i = 1;i <=9;i+=2){
        console.log(i);
    }
}