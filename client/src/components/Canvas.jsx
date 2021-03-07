import React from 'react';
import '../styles/canvas.sass'
import {observer} from "mobx-react-lite";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import {Modal, Button} from 'react-bootstrap'
import {useParams} from 'react-router-dom'

const Canvas = observer(() => {
    const canvasRef = React.useRef(null)
    const usernameRef = React.useRef(null)
    const [modal, setModal] = React.useState(true)
    const params = useParams()

    React.useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))
    }, [])
    
    React.useEffect(() => {
        if(canvasState.username) {
            const socket = new WebSocket('ws://localhost:5000/')
            socket.onopen = () => {
                console.log("Соединение установлено.")
                socket.send(JSON.stringify({
                    id: params.id,
                    username: canvasState.username,
                    method: 'connection'
                }))
            }
            socket.onmessage = (event) => {
                console.log(event.data)
            }
        }
    }, [canvasState.username])

    const onMouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL())
    }

    const connectHandler = () => {
        canvasState.setUsername(usernameRef.current.value)
        setModal(false)
    }
    
    return (
        <div className={"canvas"}>
            <Modal show={modal} onHide={() => {}}>
                <Modal.Header closeButton>
                    <Modal.Title>Введите ваше имя</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input ref={usernameRef} type="text" placeholder={"Ваше имя"}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => connectHandler()}>
                        Войти
                    </Button>
                </Modal.Footer>
            </Modal>
            <canvas onMouseDown={() => onMouseDownHandler()} ref={canvasRef} width={800} height={600}>
            </canvas>
        </div>
    );
});

export default Canvas;