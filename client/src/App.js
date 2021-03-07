import './styles/app.sass'
import ToolBar from "./components/ToolBar";
import SettingsBar from "./components/SettingsBar";
import Canvas from "./components/Canvas";
import {Switch, Route, Redirect} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path='/:id'>
                    <ToolBar/>
                    <SettingsBar/>
                    <Canvas/>
                </Route>
                <Redirect to={`f${(+ new Date).toString(16)}`} />s
            </Switch>

        </div>
    );
}

export default App;
