//código do carro

//carro 1
let xCarro1 = 600;
let yCarro1 = 40;
let velocidadeCarro1 = 2;

//carro 2
let xCarro2 = 600;
let yCarro2 = 96;
let velocidadeCarro2 = 2.5;

//carro 3
let xCarro3 = 600;
let yCarro3 = 150;
let velocidadeCarro3 = 3.2;

function mostraCarros(){
    image(imgCarro1, xCarro1, yCarro1, 50, 40);
    image(imgCarro2, xCarro2, yCarro2, 50, 40);
    image(imgCarro3, xCarro3, yCarro3, 50, 40);
}

function movimentaCarro(){
   xCarro1 -= velocidadeCarro1;
    if (xCarro1 < -50) {
        xCarro1 = 600;
    }
    xCarro2 -= velocidadeCarro2;
    if (xCarro2 < -50) {
        xCarro2 = 600;
    }
    xCarro3 -= velocidadeCarro3;
    if (xCarro3 < -50) {
        xCarro3 = 600;
    }
}