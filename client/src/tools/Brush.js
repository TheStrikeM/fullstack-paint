import Tool from "./Tool";

export default class Brush extends Tool {
    constructor(canvas, socket, sessionID) {
        super(canvas, socket, sessionID)
        this.listen()
    }

    listen() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    }

    mouseUpHandler(e) {
        this.moudeDown = false
    }

    mouseDownHandler(e) {
        this.moudeDown = true
        this.ctx.beginPath()
        this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }

    mouseMoveHandler(e) {
        console.log(this.socket)
        if(this.moudeDown) {
            // this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
            this.socket.send(JSON.stringify({
                method: 'draw',
                id: this.sessionId,
                figure: {
                    type: 'brush',
                    x: e.pageX - e.target.offsetLeft,
                    y: e.pageY - e.target.offsetTop
                }
            }))
        }
    }

    static draw(ctx, x, y) {
        ctx.lineTo(x, y)
        ctx.stroke()
        console.log("Работает");
    }
}