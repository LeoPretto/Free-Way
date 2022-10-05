
//codigos do ator

let yAtor = 366;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;
let teclado;

function ator(){
    image(imgAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
addEventListener("keydown", function(event) {
    teclado = event.keyCode;
})  
addEventListener("keyup", function(event){
    teclado = 0
}) 
    if (teclado == 38){
        yAtor -= 3;
    }
    if (teclado == 40){
        yAtor += 3;
    }
    if (yAtor > 366){
        yAtor = 366;
    }
}

function vercolisao(){
    //colideRectCircle (x1,y1 width1, heigth1, cx, cy, diameter)
    for (let i = 0; i < imgCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, (xAtor+15), (yAtor+15), 28)
        if(colisao){
            somColisao.play();
            voltarPosicaoInicial();
            pontosPositivos();            
        }
    }
}

function voltarPosicaoInicial(){
        yAtor = 366;
}

function pontos(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255,240,60));
    text(meusPontos, width / 4, 26);
    if (yAtor < 12){
        somPonto.play();
        meusPontos++;
        voltarPosicaoInicial();
    }
}

function pontosPositivos(){
    if(meusPontos > 0){
        meusPontos--;
    }    
}