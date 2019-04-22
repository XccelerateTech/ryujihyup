class DrawingStraightLine extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;    
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord, drawColor, event,){
        this.contextReal.strokeStyle = fillColor;
        this.contextReal.lineWidth = 5;
        this.contextDraft.strokeStyle = fillColor;
        this.contextDraft.lineWidth = 5;
    
        this.origX = coord[0];
        this.origY = coord[1];

    }
     
    onDragging(coord,drawColor, event){
        this.contextReal.fillStyle = drawColor;
        this.contextReal.fillStyle = drawColor;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(coord[0], coord[1]);
        this.contextDraft.stroke();
        this.contextDraft.fill();
    }

    onMouseMove(){}
    onMouseUp(coord, drawColor){
        this.contextReal.fillStyle = drawColor;
        this.contextReal.fillStyle = drawColor;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.lineTo(coord[0], coord[1]);
        this.contextReal.stroke();
        this.contextReal.fill();
    }


    
    onMouseLeave(){}
    onMouseEnter(){}

    // drawLine(x,y){
    //     this.contextReal.lineTo(x,y);
    //     this.contextReal.moveTo(x,y);
    //     this.contextReal.closePath();
    //     this.contextReal.stroke();   
    // }
}