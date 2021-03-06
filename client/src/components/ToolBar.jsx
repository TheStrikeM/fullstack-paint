import React from 'react';
import '../styles/bar.sass'

const ToolBar = () => {
    return (
        <div className={"tool-bar"}>
            <button className={"tool-bar__btn brush"} />
            <button className={"tool-bar__btn circle"} />
            <button className={"tool-bar__btn eraser"} />
            <button className={"tool-bar__btn line"} />
            <button className={"tool-bar__btn rect"} />
            <button className={"tool-bar__btn redo"} />
            <button className={"tool-bar__btn save"} />
            <button className={"tool-bar__btn undo"} />
        </div>
    );
};

export default ToolBar;