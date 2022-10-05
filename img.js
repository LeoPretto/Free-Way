//imagens do jogo

let imgEstrada;
let imgAtor;
let imgCarro1;
let imgCarro2;
let imgCarro3;
let imgCarros;
let somTrilha;
let somColisao;
let somPonto;

function preload(){
    imgEstrada = loadImage("imagens_do_jogo/estrada.png");
    imgAtor = loadImage("imagens_do_jogo/ator-1.png");
    imgCarro1 = loadImage("imagens_do_jogo/carro-1.png");
    imgCarro2 = loadImage("imagens_do_jogo/carro-2.png");
    imgCarro3 = loadImage("imagens_do_jogo/carro-3.png");
    imgCarros = [imgCarro1, imgCarro2, imgCarro3, imgCarro2, imgCarro3, imgCarro1];
    somTrilha = new Audio('sons/trilha.mp3');
    somColisao = new Audio('sons/colidiu.mp3');
    somPonto = new Audio('sons/pontos.wav');
}