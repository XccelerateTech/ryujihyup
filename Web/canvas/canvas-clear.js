class DrawingCurve extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;    
        this.contextDraft = contextDraft;
        this.count = 0;
        this.origX;
        this.origY;
        this.endX;
        this.endY;           
    }
    
    onMouseDown(coord, styleGuide, event,){
        this.contextReal.strokeStyle = this.contextDraft.strokeStyle = styleGuide.drawColor;
        this.contextReal.lineWidth = this.contextDraft.lineWidth = styleGuide.penWidth;
        this.contextReal.lineCap = this.contextDraft.lineCap = "round";
        this.origX = coord[0];
        this.origY = coord[1];
        if(this.count == 0) {
            console.log(this.count);
        }
        else if (this.count == 1) {
        console.log(this.origX);
        console.log(this.origY);
        }
    }
     
    onDragging(coord, styleGuide, event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        if(this.count == 0) {
            this.drawLine(this.origX, this.origY, coord[0], coord[1], this.contextDraft);
            console.log(this.count);      
        }
        else if (this.count == 1) {
            this.endX = coord[0];
            this.endY = coord[1];
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX, this.origY);
            this.contextReal.quadraticCurveTo(this.endX, this.endY, this.origX, this.origY);
            this.contextReal.stroke();
        }
}

    
    onMouseUp(coord, styleGuide, event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        if (this.count == 0) {
            this.count ++
            this.drawLine(this.origX, this.origY, coord[0], coord[1], this.contextReal);
            console.log(this.count);
            
        }
        else if (this.count == 1) {
            this.endX = coord[0];
            this.endY = coord[1];
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX, this.origY);
            this.contextReal.quadraticCurveTo(this.endX, this.endY, this.origX, this.origY);
            this.contextReal.stroke();
            this.count == 0;
        }
    }

    onMouseMove(){}
    onMouseLeave(){}
    onMouseEnter(){}
    
    drawLine (x1, y1, x2, y2, context) {
        this.contextReal.beginPath();
        this.contextReal.moveTo(x1, y1);
        this.contextReal.lineTo(x2, y2);
        this.contextReal.stroke();
        this.contextReal.closePath();    
    }
}

//     class DrawingCurve extends PaintFunction{
//         constructor(contextReal, contextDraft){
//             super();
//             this.contextReal = contextReal;    
//             this.contextDraft = contextDraft;
//             this.actionCounter = 0;           
//         }
        
//         onMouseDown(coord, styleGuide, event){
//             if (this.actionCounter === 0){
//                 this.contextReal.strokeStyle = this.contextDraft.strokeStyle = styleGuide.drawColor;
//                 this.contextReal.lineWidth = this.contextDraft.lineWidth = styleGuide.penWidth;
//                 this.contextReal.lineCap = this.contextDraft.lineCap = "round";    
//                 this.origX = coord[0];
//                 this.origY = coord[1];
//                 this.contextReal.beginPath();
//                 this.contextReal.moveTo(this.origX,this.origY);
//             } 
//             else if (this.actionCounter === 1){
//             }
//         }
//         onDragging(coord,event){
//             if (this.actionCounter === 0){
//                 this.endX = coord[0];
//                 this.endY = coord[1];
//                 this.contextDraft.closePath();
//                 this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//                 this.contextDraft.beginPath();
//                 this.contextDraft.moveTo(this.origX,this.origY);
//                 this.contextDraft.quadraticCurveTo(this.origX,this.origY,this.endX,this.endY);
//                 this.contextDraft.stroke();
//             } else if (this.actionCounter === 1){
//                 this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//                 this.contextDraft.beginPath();
//                 this.contextDraft.moveTo(this.origX,this.origY);
//                 this.contextDraft.quadraticCurveTo(coord[0],coord[1],this.endX,this.endY);
//                 this.contextDraft.stroke();
//             }
//         }
//         onMouseUp(coord,event){
//             if (this.actionCounter === 0){
//                 this.actionCounter = 1;
//             } else if (this.actionCounter === 1){
//                 this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//                 this.contextReal.quadraticCurveTo(coord[0],coord[1],this.endX,this.endY);
//                 this.contextReal.stroke();
//                 this.actionCounter = 0;
//         }
//     }
//         onMouseMove(){}
//         onMouseLeave(){}
//         onMouseEnter(){}
    
// }
