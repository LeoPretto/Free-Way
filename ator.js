
//codigos do ator

let yAtor = 366;
let xAtor = 100;

let teclado;

function ator(){
    image(imgAtor, xAtor, yAtor, 30, 30);
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