class Fire{
    constructor(x,y,width,height){
      this.distance = 0
    this.body = rect(x,y,width, height);
    this.width = width;
    this.height = height;
    this.y = y;
    this.x = x;
    this.image = loadImage("images/flame.png");
}
    display(){
      image(this.image, 900,1000, this.width, this.height);  
    }
    play(){
      camera.position.x = this.x;
      camera.position.y = this.y;

    }
}