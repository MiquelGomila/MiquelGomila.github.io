
let jugador1 = []
let jugador2 = []
let bolla1 = []

let marcador1;
let marcador2;

function setup(){

  const canvasDiv = document.getElementById("canvasContainer");
  let ampleCanvas = canvasDiv.offsetWidth;
  let altCanvas= canvasDiv.offsetHeight;
  let cnv = createCanvas(ampleCanvas, altCanvas);
  cnv.parent("canvasContainer");

  marcador1 = 0;
  marcador2= 0;
  
  createCanvas(ampleCanvas, altCanvas);
  jugador1 = new jugador(width/2, 15, 100, 10, 20, 68, 65, 37, 41, 83)
  jugador2 = new jugador(width/2, height - 35, 100, 10, 20, 39, 37, 87, 3, 2)
  bolla1 = new bolla(width/2, height/2, 25, 10, 0, 67, 85, 94)
}

function draw(){
  background(0);
  jugador1.dibuixa();
  jugador2.dibuixa();
  jugador1.moviment();
  jugador2.moviment();
  bolla1.dibuixa();
  bolla1.moviment();
  
   
}