//código do carro
let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 2.7, 5, 3.5];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarros(){
    for (let i = 0; i < imgCarros.length; i++){
        image(imgCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
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