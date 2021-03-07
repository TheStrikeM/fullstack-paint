import {makeAutoObservable} from "mobx";

class CanvasState {
    canvas = null
    socket = null
    sessionId = null
    undoList = []
    redoList = []
    username = ""

    constructor() {
        makeAutoObservable(this)
    }

    setCanvas(canvas) {
        this.canvas = canvas
    }

    setUsername(username) {
        this.username = username
    }

    setSocket(socket) {
        this.socket = socket
    }

    setSessionId(sessionId) {
        this.sessionId = sessionId
    }

    pushToUndo(data) {
        this.undoList.push(data)
    }

    pushToRedo(data) {
        this.redoList.push(data)
    }

    undo() {
        const ctx = this.canvas.getContext('2d')
        if (this.undoList.length > 0) {
            const dataUrl = this.undoList.pop()
            this.redoList.push(this.canvas.toDataURL())
            let img = new Image()
            img.src = dataUrl
            img.onload =  () => {
                ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
                ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            }
        } else {
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.heigth)
        }
    }

    redo() {
        const ctx = this.canvas.getContext('2d')
        if(this.redoList.length > 0) {
            const dataUrl = this.redoList.pop()
            this.undoList.push(this.canvas.toDataURL())
            let img = new Image()
            img.src = dataUrl
            img.onload = () => {
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            }
        }
    }
}

export default new CanvasState()