class DrawingCircle extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;    
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,drawColor, event){
        this.contextReal.strokeStyle = drawColor;
        this.contextReal.lineWidth = 5;
        this.contextDraft.strokeStyle = drawColor;
        this.contextDraft.lineWidth = 5;
        this.origX = coord[0];
        this.origY = coord[1];
    }
     
    onDragging(coord, drawColor, event){
        this.contextReal.fillStyle = fillColor;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.arc(this.origX, this.origY, Math.sqrt((coord[0] - this.origX) ** 2 + (coord[1] - this.origY) ** 2),
        0, 2 * Math.PI);
        this.contextDraft.stroke();
        this.contextDraft.fill();
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextReal.fillStyle = fillColor;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.arc(this.origX, this.origY, Math.sqrt((coord[0] - this.origX) ** 2 + (coord[1] - this.origY) ** 2),
        0, 2 * Math.PI);
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