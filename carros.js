//código do carro
let xCarros = [600, 600, 600]
let yCarros = [40, 96, 150];
let velocidadeCarros = [2, 2.5, 3.2];

function mostraCarros(){
    for (let i = 0; i < imgCarros.length; i++){
        image(imgCarros[i], xCarros[i], yCarros[i], 50, 40);
    }
}

function movimentaCarro(){
    for (let i = 0; i < imgCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i];
        if (xCarros[i] < -50) {
            xCarros[i] = 600;
        }
    }
}