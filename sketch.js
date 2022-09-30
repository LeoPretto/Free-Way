let imgEstrada;
let imgAtor;
let imgCarro1;

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
    image(imgAtor, 100, 366, 30, 30);
    image(imgCarro1, 420, 40, 50, 40);
}