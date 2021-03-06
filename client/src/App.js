import './styles/app.sass'
import ToolBar from "./components/ToolBar";
import SettingsBar from "./components/SettingsBar";
import Canvas from "./components/Canvas";

function App() {
    return (
        <div className="App">
            <ToolBar />
            <SettingsBar />
            <Canvas />
        </div>
    );
}

export default App;
