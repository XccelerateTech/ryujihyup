class Eraser extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;                      
    }
    
    onMouseDown(coord,event){
        this.contextReal.strokeStyle = "white";
        this.contextReal.lineJoin = "round";
        this.contextReal.lineWidth = 30;
        this.contextReal.beginPath();
        this.contextReal.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
    }

    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y){
        this.contextReal.lineTo(x,y);
        this.contextReal.moveTo(x,y);
        this.contextReal.closePath();
        this.contextReal.stroke();    
    }
}