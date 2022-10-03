let imgEstrada;
let imgAtor;
let imgCarro1;
let teclado;

//váriveis do carro
let xCarro1 = 600;

//váriaveis ator
let yAtor = 366;

function preload(){
    imgEstrada = loadImage("imagens_do_jogo/estrada.png")
    imgAtor = loadImage("imagens_do_jogo/ator-1.png")
    imgCarro1 = loadImage("imagens_do_jogo/carro-1.png")
}

function setup(){
    createCanvas(500,400);
}

function draw(){
    background(imgEstrada);
    Ator();
    Carro1();
    movimentaCarro();
    movimentaAtor();
}

function Ator(){
    image(imgAtor, 100, yAtor, 30, 30);
}

function Carro1(){
    image(imgCarro1, xCarro1, 40, 50, 40);

}

function movimentaCarro(){
    xCarro1 -= 2;
    if (xCarro1 < 0) {
        xCarro1 = 600;
    }
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
