
//codigos do ator

let yAtor = 366;

let teclado;

function Ator(){
    image(imgAtor, 100, yAtor, 30, 30);
}

addEventListener("keydown", function(event) {
    teclado = event.keyCode;
    console.log(teclado);
})  

function movimentaAtor(){
    if (teclado == 38){
        yAtor -= 1;
    }
    if (teclado == 40){
        yAtor +=1;
    }
    if (teclado == 32){
        yAtor = yAtor;
    }
}