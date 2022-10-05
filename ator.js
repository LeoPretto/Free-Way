
//codigos do ator

let yAtor = 366;
let xAtor = 100;
let colisao = false;
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

function vercolisao(){
    //colideRectCircle (x1,y1 width1, heigth1, cx, cy, diameter)
    for (let i = 0; i < imgCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
        if (colisao){
            colidiu();
        }
    }
}

function colidiu(){
    yAtor = 366;
}