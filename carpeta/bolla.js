class bolla{
    constructor(posX, posY, diam, velY, velX, r,g,b){
      this.x = posX;
      this.y = posY;
      this.d = diam;
      this.vY = velY;
      this.vX = velX;
      this.color = {
        r: r,
        g: g,
        b: b,
      
      };
    }
    dibuixa(){
      circle(this.x, this.y, this.d);
      text("JUGADOR 2: " + marcador1, 0, height/2);
    text("JUGADOR 1: " + marcador2, 0, 255);
    }
    moviment(){
      this.x += this.vX
      this.y += this.vY
       if (this.y >= height) {
      this.vY = this.vY * -1;
         marcador1 = ++marcador1;
      //jugador 1 puntua
    }
  
    if (this.y <= 0) {
      this.vY = this.vY * -1;
      marcador2 = ++marcador2;
      //jugador 2 puntua
    }
    if (this.x >= width){
      this.vX = this.vX * -1;
      
    }
    if (this.x<=0){
      this.vX = this.vX * -1;
    }
      
       if (this.y - this.d / 2 < this.y + this.a) {
      if (this.x > this.d && this.x < this.d + this.a) {
        this.vX = random(4,7); 
        this.vY = random(4,7) ;
     
      }
    }
       if (this.y + this.d / 2 > this.y) {
      if (this.x > this.d && this.x < this.d + this.a) {
        this.vX = random(-4,7);
        this.vY = random(-4,-7);
       
      }
    }
       if (this.y - this.d<jugador1.y){
        if(this.x-this.d/2<jugador1.x+jugador1.a){
         if(this.x+this.d/2>jugador1.x){
           this.vY *=-1
            this.vX *=-1
           this.vX = random(4,7);
        this.vY = random(4,7);
           }
         }
       }
       if (this.y + this.d/2>jugador2.y){
         if(this.x-this.d/2<jugador2.x+jugador2.a){
           if(this.x+this.d/2>jugador2.x){
            this.vY *=-1
            this.vX *=-1
             this.vX = random(-4,7);
        this.vY = random(-4,-7);
           }
         }
       }
  }
    
  }