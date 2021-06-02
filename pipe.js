class Pipe{
    constructor(){
        this.space=175
        this.top=(random(height/6,3/4*height))
        this.bottom=height-(this.top+this.space)
        this.x=width
        this.w=80
        this.speed=6
        this.highlight=false;
    }
    update(){
        this.x=this.x-this.speed
    }
    hit(playerbird){
        if(playerbird.y<this.top || playerbird.y>height-this.bottom){
            if(playerbird.x>this.x && playerbird.x<this.x+this.w){
            this.highlight=true;
            return true
            }
                
            }
            this.highlight=false;
            return false
        
    }
    show(){
        fill("yellow")
        if(this.highlight){
            fill("green")
        }
        rect(this.x,0,this.w,this.top)
        rect(this.x,height-this.bottom,this.w,this.bottom)
    }


    offscreen(){
        if(this.x<-this.w){
         return true   
        }
        else {
            return false
        }
    }
}