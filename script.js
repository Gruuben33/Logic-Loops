function setup() {
    createCanvas(windowWidth, windowHeight)
    background(100)
    textSize(32)

    // Generate a random array of numbers
    let grades = []
    let n = Math.round(random(5, 25))
    for (let i = 0; i < n; i++) {
        let x = Math.round(random(1, 100))
        grades.push(x)
    }

    // Sort the grades from least to greatest
    let sortedGrades = sort(grades)

    // Least and Greatest
    let big = sortedGrades[sortedGrades.length - 1]
    let small = sortedGrades[0]

    // Present the results
    text(`Unsorted Array: ${grades}`, 50, 50)
    text(`Sorted Array: ${sortedGrades}`, 50, 100)
    text(`Greatest Grade: ${big}`, 50, 150)
    text(`Least Grade: ${small}`, 50, 200)
}