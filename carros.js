//código do carro

//váriveis do carro
let xCarro1 = 600;

function Carro1(){
    image(imgCarro1, xCarro1, 40, 50, 40);

}

function movimentaCarro(){
    xCarro1 -= 2;
    if (xCarro1 < 0) {
        xCarro1 = 600;
    }
}