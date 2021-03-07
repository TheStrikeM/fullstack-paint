import React from 'react';
import '../styles/bar.sass'
import toolState from "../store/toolState";
import canvasState from "../store/canvasState";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";

const ToolBar = () => {
    return (
        <div className={"tool-bar"}>
            <button
                className={"tool-bar__btn brush"}
                onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
            />

            <button
                className={"tool-bar__btn circle"}
                onClick={() => toolState.setTool(new Circle(canvasState.canvas))}
            />

            <button
                className={"tool-bar__btn eraser"}
                onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}
            />

            <button
                className={"tool-bar__btn line"}
                onClick={() => toolState.setTool(new Line(canvasState.canvas))}
            />

            <button
                className={"tool-bar__btn rect"}
                onClick={() => toolState.setTool(new Rect(canvasState.canvas))}
            />

            <input className={"tool-bar__btn"} type="color"/>

            <button
                className={"tool-bar__btn undo"}
            />

            <button
                className={"tool-bar__btn redo"}
            />

            <button
                className={"tool-bar__btn save"}
            />
        </div>
    );
};

export default ToolBar;