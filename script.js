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

    // Least and Greatest and Range
    let big = sortedGrades[sortedGrades.length - 1]
    let small = sortedGrades[0]
    let range = big - small

    // Sum and Average
    let sum = 0
    for (let i = 0; i < sortedGrades.length; i++) {
        sum += sortedGrades[i]
    }
    let average = sum / sortedGrades.length

    // Present the results
    let spacing = 100
    text(`Unsorted Array: \n${grades}`, 50, spacing)
    text(`Sorted Array: \n${sortedGrades}`, 50, spacing*2)
    text(`Greatest Grade: \n${big}`, 50, spacing*3)
    text(`Least Grade: \n${small}`, 50, spacing*4)
    text(`Range: \n${range}`, 50, spacing*5)
    text(`Average: \n${average}`, 50, spacing*6)
}