import React from 'react';
import '../styles/canvas.sass'
import {observer} from "mobx-react-lite";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";

const Canvas = observer(() => {
    const canvasRef = React.useRef(null)

    React.useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))
    }, [])
    
    return (
        <div className={"canvas"}>
            <canvas ref={canvasRef} width={800} height={600}>

            </canvas>
        </div>
    );
});

export default Canvas;