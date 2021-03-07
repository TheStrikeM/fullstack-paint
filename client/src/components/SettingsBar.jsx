import React from 'react';
import '../styles/bar.sass'
import toolState from "../store/toolState";

const SettingsBar = () => {
    return (
        <div className={"setting-bar"}>
            <label htmlFor="line-width">Толщина линии: </label>
            <input
                onChange={e => toolState.setLineWidth(e.target.value)}
                style={{margin: '0 10px'}}
                id={"line-width"}
                defaultValue={1}
                type="number"
                min={1}
                max={50}
            />


        </div>
    );
};

export default SettingsBar;