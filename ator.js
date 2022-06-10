// código do ator

let xAtor = 80;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
    }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
 }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
      if (colisao){
        voltaAtorParaPosicaoInicial();
        somColisao.play();
        if (meusPontos >0) {
             meusPontos -= 1;
         }
     }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 255, 0))
  text(meusPontos, width /5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somPonto.play();
    voltaAtorParaPosicaoInicial()
  }
}

function podeSeMover(){
  return yAtor < 366;

}