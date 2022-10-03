//código do carro

//váriveis do carro
let xCarro1 = 600;
let yCarro1 = 40;

function Carro1(){
    image(imgCarro1, xCarro1, yCarro1, 50, 40);

}

function movimentaCarro(){
    xCarro1 -= 2;
    if (xCarro1 < 0) {
        xCarro1 = 600;
    }
}