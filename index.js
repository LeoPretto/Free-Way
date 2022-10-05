

function setup(){
    createCanvas(500,400);
}

function draw(){
    background(imgEstrada);
    ator();
    mostraCarros();
    movimentaCarro();
    movimentaAtor();
    vercolisao();
    pontos();
    somTrilha.play();
    somTrilha.loop =true;
}