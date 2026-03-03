function setup() {
    createCanvas(windowWidth, windowHeight)
    background(100)
    textSize(32)

    let array = []
    let n = Math.round(random(5, 25))
    for (let i = 0; i < n; i++) {
        let x = Math.round(random(1, 100))
        array.push(` ${x}`)
    }

    text("Array:", 50, 50)
    text(array, 50, 100)

    for (let i = array.length-1; i >= 0; i--) {
        for (let j = 0; j < array.length; j++) {
            return
        }
    }
}