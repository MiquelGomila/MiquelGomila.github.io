class jugador {
    constructor(posX, posY, ample, long, vel, movD, movE, r, g, b){
      this.x = posX;
      this.y = posY;
      this.a = ample;
      this.l = long;
      this.v = vel;
      this.d = movD;
      this.e = movE;
      this.color = {
        r: r,
        g: g,
        b: b,
      };
      
    }
    dibuixa() {
      fill(this.color.r, this.color.g, this.color.b);
      rect(this.x, this.y, this.a, this.l);
    }
    moviment(){
      
    if (keyIsDown(this.e)) {
      this.x -= 5;
    } 
    if (keyIsDown(this.d)) {
      this.x += 5;
    }
  }
  }
  