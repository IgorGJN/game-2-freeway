// Código do Carro


let xCarros = [600, 600, 600, 600, 600,600];
let yCarros = [36, 92, 145, 205, 258, 313];
let velocidadeCarros = [5, 2.5, 6, 3.5, 3, 4];
let comprimentoCarro = 40;
let alturaCarro = 50;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
   image(imagemCarros[i], xCarros[i], yCarros[i], 40, 50); 
  }
}

function movimentaCarro(){
  for (let i = 0; i< imagemCarros.length; i++){
   xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i< imagemCarros.length; i++){
   if (passouTodaATela(xCarros[i])){
     xCarros[i] = 600;
   } 
  }
}

function passouTodaATela(xCarro){
  return xCarro <-50;
}