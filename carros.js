//código do carro
let xCarros = [600, 600, 600]
let yCarros = [40, 96, 150];
let velocidadeCarros = [2, 2.5, 3.2];

function mostraCarros(){
    image(imgCarro1, xCarros[0], yCarros[0], 50, 40);
    image(imgCarro2, xCarros[1], yCarros[1], 50, 40);
    image(imgCarro3, xCarros[2], yCarros[2], 50, 40);
}

function movimentaCarro(){
   xCarros[0] -= velocidadeCarros[0];
    if (xCarros[0] < -50) {
        xCarros[0] = 600;
    }
    xCarros[1] -= velocidadeCarros[1];
    if (xCarros[1] < -50) {
        xCarros[1] = 600;
    }
    xCarros[2] -= velocidadeCarros[2];
    if (xCarros[2] < -50) {
        xCarros[2] = 600;
    }
}