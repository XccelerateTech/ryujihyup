class ColorBucket extends PaintFunction {
    constructor(contextReal, contextDraft) {
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
      this.pixelStack = [];
      this.imgData;
      this.clickPoint;
      this.red;
      this.green;
      this.blue;
      this.curColor = {};
    }
    onMouseDown(coord, drawColor) {
      this.hex2rgb(drawColor);
      console.log(drawColor);
      this.imgData = this.contextReal.getImageData(0,0,canvasReal.width , canvasReal.height);
      this.clickPoint = (coord[1] * canvasReal.width + coord[0]) * 4;
      console.log(this.clickPoint)
      this.red = this.imgData.data[this.clickPoint];
      this.green = this.imgData.data[this.clickPoint + 1];
      this.blue = this.imgData.data[this.clickPoint + 2];
      console.log(this.red);
      console.log(this.green);
      console.log(this.blue);
      this.floodFill(coord);
      console.log('break')
      console.log(this.curColor)
      this.contextReal.putImageData(this.imgData, 0, 0);

    }
    onDragging() { }
    onMouseMove() { }
    onMouseUp() { 
      beforeDraw();
    }
    onMouseLeave() { }
    onMouseEnter() { }

    hex2rgb( colour ) {

    var r,g,b;
      if ( colour.charAt(0) == '#' ) {
          colour = colour.substr(1);
      }
      if ( colour.length == 3 ) {
              colour = colour.substr(0,1) + colour.substr(0,1) + colour.substr(1,2) + colour.substr(1,2) + colour.substr(2,3) + colour.substr(2,3);
      }
      r = colour.charAt(0) + '' + colour.charAt(1);
      g = colour.charAt(2) + '' + colour.charAt(3);
      b = colour.charAt(4) + '' + colour.charAt(5);
      r = parseInt( r,16 );
      g = parseInt( g,16 );
      b = parseInt( b ,16);
    return this.curColor = {
      r,
      g,
      b
    };
  }
  floodFill(coord) {
          var newPos,
              x,
              y,
              pixelPos,
              reachLeft,
              reachRight
          //add task to pixel stack
          this.pixelStack.push(coord)
          console.log("pixelStack")
          while (this.pixelStack.length) {
              //set new locaiton from pixel stack
              newPos = this.pixelStack.pop();
              x = newPos[0];
              y = newPos[1];
    
              //set new pixel location
              pixelPos = (y * canvasReal.width + x) * 4;
    
              //go up as long as the color matches and are inside the canvas (return true)
              while (y >= 0 && this.matchStartColor(pixelPos)) {
                  y -= 1;
                  pixelPos -= canvasReal.width * 4;
              }
              //update
              pixelPos += canvasReal.width * 4;
              y += 1;
    
              //initialize for addtion of pixel stack
              reachLeft = false;
              reachRight = false;
    
              //go down as long as the color matches in inside the canvas
              while (y <= canvasReal.height - 1 && this.matchStartColor(pixelPos)) {
                  //fill current pixel location
                  this.colorPixel(pixelPos);
                  //downward
                  y += 1;
    
                  //check left pixel
                  if (x > 0) {
                      //match start color return true
                      if (this.matchStartColor(pixelPos - 4)) {
                          //if not yet reach left edge 
                          if (!reachLeft) {
                              //add pixel to stack to handle it later
                              this.pixelStack.push([x - 1, y])
                              //prevent adding pixel that will eventually handled by the downward march of the pixel we just add
                              reachLeft = true;
                          }
    
                      } else if (reachLeft) {
                          //color not match then change reach Left to false, for adding next pixel stack
                          reachLeft = false;
                      }
                  }
    
                  // check right pixel
                  if (x < canvasReal.width - 1) {
                      if (this.matchStartColor(pixelPos + 4)) {
                          if (!reachRight) {
                              this.pixelStack.push([x + 1, y]);
                              reachRight = true;
                          }
                      } else if (reachRight) {
                          reachRight = false;
                      }
    
                  }
                  //should be last valid pixel location
                  pixelPos += canvasReal.width * 4;
              }
    
          }
    
      }
      //check new color equal to start color
      matchStartColor(pixelPos) {
          var re = this.imgData.data[pixelPos];
          var gr = this.imgData.data[pixelPos + 1];
          var bl = this.imgData.data[pixelPos + 2];
          return (re === this.red && gr === this.green && bl === this.blue);
      }
      //fill color
      colorPixel(pixelPos) {
          this.imgData.data[pixelPos] = this.curColor.r;
          this.imgData.data[pixelPos + 1] = this.curColor.g;
          this.imgData.data[pixelPos + 2] = this.curColor.b;
          this.imgData.data[pixelPos + 3] = 255;
      }
}

// class PaintBucket extends PaintFunction {
//   constructor(contextReal) {
//       super();
//       this.context = contextReal;
//       this.pixelStack = [];
//       this.imgData;
//       this.curColor = {};
//       this.startPOS;
//       this.startR;
//       this.startG;
//       this.startG;
//   }

//   onMouseDown(coord) {
//       this.HEXtoRGB()
//       //get start image data(array of pixel)
//       this.imgData = this.context.getImageData(0, 0, canvasReal.width, canvasReal.height)
//       //set start pixel location
//       this.startPOS = (coord[1] * canvasReal.width + coord[0]) * 4;
//       //set start rgb color
//       this.startR = this.imgData.data[this.startPOS];
//       this.startG = this.imgData.data[this.startPOS + 1];
//       this.startB = this.imgData.data[this.startPOS + 2];
//       //flood fill
//       this.floodFill(coord)
//       //update image
//       this.context.putImageData(this.imgData, 0, 0);
//   }
//   onDragging(coord) {}

//   onMouseMove() {}
//   onMouseUp() {}
//   onMouseLeave() {}
//   onMouseEnter() {}
//   floodFill(coord) {
//       var newPos,
//           x,
//           y,
//           pixelPos,
//           reachLeft,
//           reachRight
//       //add task to pixel stack
//       this.pixelStack.push(coord)

//       while (this.pixelStack.length) {
//           //set new locaiton from pixel stack
//           newPos = this.pixelStack.pop();
//           x = newPos[0];
//           y = newPos[1];

//           //set new pixel location
//           pixelPos = (y * canvasReal.width + x) * 4;

//           //go up as long as the color matches and are inside the canvas (return true)
//           while (y >= 0 && this.matchStartColor(pixelPos)) {
//               y -= 1;
//               pixelPos -= canvasReal.width * 4;
//           }
//           //update
//           pixelPos += canvasReal.width * 4;
//           y += 1;

//           //initialize for addtion of pixel stack
//           reachLeft = false;
//           reachRight = false;

//           //go down as long as the color matches in inside the canvas
//           while (y <= canvasReal.height - 1 && this.matchStartColor(pixelPos)) {
//               //fill current pixel location
//               this.colorPixel(pixelPos);
//               //downward
//               y += 1;

//               //check left pixel
//               if (x > 0) {
//                   //match start color return true
//                   if (this.matchStartColor(pixelPos - 4)) {
//                       //if not yet reach left edge 
//                       if (!reachLeft) {
//                           //add pixel to stack to handle it later
//                           this.pixelStack.push([x - 1, y])
//                           //prevent adding pixel that will eventually handled by the downward march of the pixel we just add
//                           reachLeft = true;
//                       }

//                   } else if (reachLeft) {
//                       //color not match then change reach Left to false, for adding next pixel stack
//                       reachLeft = false;
//                   }
//               }

//               // check right pixel
//               if (x < canvasReal.width - 1) {
//                   if (this.matchStartColor(pixelPos + 4)) {
//                       if (!reachRight) {
//                           this.pixelStack.push([x + 1, y]);
//                           reachRight = true;
//                       }
//                   } else if (reachRight) {
//                       reachRight = false;
//                   }

//               }
//               //should be last valid pixel location
//               pixelPos += canvasReal.width * 4;
//           }

//       }

//   }
//   //check new color equal to start color
//   matchStartColor(pixelPos) {
//       var r = this.imgData.data[pixelPos];
//       var g = this.imgData.data[pixelPos + 1];
//       var b = this.imgData.data[pixelPos + 2];
//       return (r === this.startR && g === this.startG && b === this.startB);
//   }
//   //fill color
//   colorPixel(pixelPos) {
//       this.imgData.data[pixelPos] = this.curColor.r;
//       this.imgData.data[pixelPos + 1] = this.curColor.g;
//       this.imgData.data[pixelPos + 2] = this.curColor.b;
//       this.imgData.data[pixelPos + 3] = 255;
//   }
//   //convert hex to rgb color
//   HEXtoRGB() {
//       var hex = document.getElementById("color").value;
//       if (hex.charAt(0) === '#') {
//           //remove #
//           hex = hex.substr(1);
//       }
//       //valid hex color
//       if (hex.length > 6) {
//           return false;
//       }
//       //split to array of 6
//       var values = hex.split(''),
//           r,
//           g,
//           b;
//       if (hex.length === 6) {
//           //parse to rgb color (16 = hexadecimel)
//           //each rgb occupy 2 hex number
//           r = parseInt(values[0].toString() + values[1].toString(), 16);
//           g = parseInt(values[2].toString() + values[3].toString(), 16);
//           b = parseInt(values[4].toString() + values[5].toString(), 16);
//       } else {
//           return false;
//       }
//       //set current rgb color
//       return this.curColor = {
//           r,
//           g,
//           b
//       }
//   }
// }