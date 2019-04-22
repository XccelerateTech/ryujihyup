class Eyedropper extends PaintFunction{
    constructor(contextReal){
        super();
        this.contextReal = contextReal;
    }
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(coord,event){
        this.color(coord);
    }
    onMouseLeave(){}
    onMouseEnter(){}
    
    rbgaToHex(num){
        var hex = num.toString(16);
        return hex.length ==1 ? "0" + hex : hex;
    }
    
    color(coord){
        var color = this.contextReal.getImageData(coord[0],coord[1],1,1).data;
        console.log(color)
        var hexCode = this.rbgaToHex(color[0])+this.rbgaToHex(color[1])+this.rbgaToHex(color[2]);
        console.log(hexCode)
        $('#color-square-mini-13').css("background","#"+hexCode);
    }

}

