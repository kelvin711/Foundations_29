let canvas = document.querySelector('canvas')

const setDimensions = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}
setDimensions()

let context = canvas.getContext('2d')

let mouse = {
    x:undefined,
    y:undefined
}

class Bubble {
    constructor(x,y,xVelocity,yVelocity,radius) {
        this.xPosition = x;
        this.yPosition = y;
        this.radius = radius

        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;

        this.radiusScale = 1;
    }

    draw = () => {
        context.beginPath()
        context.arc(this.xPosition,this.yPosition,this.radius * this.radiusScale,0,Math.PI * 2,false)
        context.strokeStyle = 'blue'
        context.stroke()
        context.fillStyle = 'aqua'
        context.fill()
    }

    shrink = () => {
        if(this.radiusScale <= 0.1) {
            return
        }

        this.radiusScale -= 0.005
    }

    update = () => {
        if(this.xPosition + this.radius > innerWidth || this.xPosition - this.radius < 0) {
            this.xVelocity *= -1
        }
        if(this.yPosition + this.radius > innerHeight || this.yPosition - this.radius < 0) {
            this.yVelocity *= -1
        }

        this.xPosition += this.xVelocity
        this.yPosition += this.yVelocity

        this.draw()
        this.shrink()
    }
}

class BubbleNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class BubbleList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToBack(value) {
        let newBubble = value;
        if(this.head === null) {
            this.head = newBubble;
            this.tail = newBubble;
        } else {
            this.tail.next = newBubble;
            this.tail = newBubble;
        }
        return `Added new Bubble ${newBubble} to Bubble List.`
    }

    size() {
        let count = 0;
        let runner = this.head;
        while(runner){
            count++;
            runner = runner.next;
        }
        return count;
    }

    removeFront() {
        if(this.head === null){
            return undefined
        }

        if(this.head === this.tail) {
            let temp = this.head;
            while(this.head.value.radius > 0) {
                this.head.value.shrink()
            }
            this.head = null;
            this.tail = null;
            return temp.value;
        }
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
    }

    drawBubbles(runner = this.head) {
        if (runner === null) {
            return
        }

        if(runner.next) {
            runner.value.update()
            return this.drawBubbles(runner.next)
        } else {
            runner.value.update()
            return
        }
    }

    removeExcess = () => {
        while(this.size() >= 2000) {
            this.removeFront()
        }
    }
}

let bubbleList = new BubbleList()

const animate = () => {
    requestAnimationFrame(animate)
    context.clearRect(0,0,innerWidth,innerHeight)

    bubbleList.drawBubbles()
    bubbleList.removeExcess()
} 

const mouseBubbles = evt => {
    mouse.x = evt.x
    mouse.y = evt.y

    let xPosition = mouse.x
    let yPosition = mouse.y

    let radius = Math.floor((Math.random() * 50) + 20)
    let xOrigin = 0 + (radius * 2)
    let yOrigin = innerHeight - (radius * 2)

    let xDirection = xPosition - xOrigin
    let yDirection = yPosition - yOrigin

    let vector = Math.sqrt(xDirection**2 + yDirection**2)

    let xVelocity = (xDirection / vector) * 10
    let yVelocity = (yDirection / vector) * 10

    bubbleList.addToBack(new BubbleNode(new Bubble(xOrigin, yOrigin, xVelocity, yVelocity, radius)))
} 

canvas.addEventListener('mousemove', mouseBubbles)
animate()