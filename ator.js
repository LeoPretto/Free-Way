
//codigos do ator

let yAtor = 366;
let xAtor = 85;
let colisao = false;
let teclado;
let meusPontos = 0;

function ator(){
    image(imgAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
    addEventListener("keydown", function(event) {
        if (event.keyCode == 38){
            yAtor -= 1;
        }
        if (event.keyCode == 40){
            yAtor += 1;
        }
        console.log(yAtor);
}
)  
    
}

function vercolisao(){
    //colideRectCircle (x1,y1 width1, heigth1, cx, cy, diameter)
    for (let i = 0; i < imgCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
        if(colisao){
            voltarPosicaoInicial();
        }
    }
}

function voltarPosicaoInicial(){
        yAtor = 366;
        yAtor = yAtor;
}

function pontos(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255,240,60));
    text(meusPontos, width / 4, 26);
    if (yAtor < 12){
        meusPontos++;
        voltarPosicaoInicial();
    }
}