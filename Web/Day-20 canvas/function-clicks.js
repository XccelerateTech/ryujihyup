$('#draw-rectangle').click(()=>{
    currentFunction = new DrawingRectangle(contextReal,contextDraft);
});
$('#draw-pen').click(()=>{
    currentFunction = new DrawingLine(contextReal,contextDraft);
});
$('#draw-circle').click(()=>{
    currentFunction = new DrawingCircle(contextReal,contextDraft);
});
$('#draw-line').click(()=>{
    currentFunction = new DrawingStraightLine(contextReal,contextDraft);
});
$('#eraser').click(()=>{
    currentFunction = new Eraser(contextReal,contextDraft);
});
$('#clear').click(()=>{
    currentFunction = new ClearButton(contextReal,contextDraft);
});
$('#startDropper').click(()=>{
    currentFunction = new Eyedropper(contextReal);
});
$('#colorBucket').click(()=>{
    currentFunction = new ColorBucket(contextReal, contextDraft);
})
currentFunction = new DrawingLine(contextReal,contextDraft); 