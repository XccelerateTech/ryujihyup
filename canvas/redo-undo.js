// let $canvas = $('#canvas-real');
// let undoDataStack = [];
// let redoDataStack = [];


// function beforeDraw() {
//         var lastMove = $canvas[0].toDataURL();
//         undoDataStack.push(lastMove);
//         redoDataStack = [];

// }

// $('#undo').click(function undo () {
//     if (undoDataStack.length == 0) {
//         return;
    
//     }else if (undoDataStack.length == 1) {
//         contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
 
//     }
//     else {


//         var lastStep = new Image();
        
//         lastStep.src = undoDataStack[undoDataStack.length - 2];

//         lastStep.onload = function (){

//         contextReal.drawImage(lastStep, 0, 0);
//     };
//     }
//     redoDataStack.push(undoDataStack.pop());
    
// })

// $('#redo').click(function redo () {
//     if (redoDataStack.length <= 0) {
//         return;

//     }else {
//         var nextStep = new Image();
//         nextStep.src = redoDataStack[redoDataStack.length - 1];

//         nextStep.onload = function () {
//             contextReal.drawImage(nextStep, 0, 0);
//         };
//         undoDataStack.push(redoDataStack.pop());
//     }

    
// }
// )

let $canvas = $('#canvas-real');
let undoDataStack = [];
let redoDataStack = [];


function beforeDraw() {
    let lastMove = $canvas[0].toDataURL('image/png', 1);
    undoDataStack.push(lastMove);
    redoDataStack = [];


}

$('#undo').click(function () {
    if (undoDataStack.length == 0) {
        return
    } else if (undoDataStack.length == 1) {
        contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    } else {
        let lastStep = new Image();
        lastStep.src = undoDataStack[undoDataStack.length - 2];
        lastStep.onload = function () {
            contextReal.drawImage(lastStep, 0, 0);
        };
    }
    redoDataStack.push(undoDataStack.pop());
})

$('#redo').click(function () {
    if (redoDataStack.length == 0) {
        return
    } else {
        let nextStep = new Image();
        nextStep.src = redoDataStack[redoDataStack.length - 1];
        nextStep.onload = function () {
            contextReal.drawImage(nextStep, 0, 0);
        };
        undoDataStack.push(redoDataStack.pop());
    }
})