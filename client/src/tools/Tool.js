export default class Tool {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.destroyEvents()
    }

    destroyEvents() {
        this.canvas.onmousedown = null
        this.canvas.onmouseup = null
        this.canvas.onmousemove = null
    }
}