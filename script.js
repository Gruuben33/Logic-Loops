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

    // Least and Greatest and Range
    let big = 0
    let small = 101
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] > big) {
            big = grades[i]
        }
    }
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < small) {
            small = grades[i]
        }
    }
    let range = big - small

    // Sum and Average
    let sum = 0
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i]
    }
    let average = sum / grades.length

    // Sort the grades from least to greatest
    let sortedGrades = sort(grades)

    // Median
    let even = false
    let odd = false
    if (sortedGrades.length % 2 == 0) {
        even = true
    } else {
        odd = true
    }
    let median = 0
    if (even) {
        let mid1 = sortedGrades[sortedGrades.length / 2]
        let mid2 = sortedGrades[sortedGrades.length / 2 - 1]
        median = (mid1 + mid2) / 2
    } else if (odd) {
        median = sortedGrades[Math.round(sortedGrades.length / 2) - 1]
    }

    // Mode
    let mode = 0
    let modeCount = 0
    let competingMode = 0
    let competingModeCount = 0
    for (let i = 0; i < sortedGrades.length; i++) {
        if (competingMode == sortedGrades[i]) {
            competingModeCount++
        } else if (competingModeCount > modeCount) {
            mode = competingMode
            modeCount = competingModeCount
            competingMode = sortedGrades[i]
            competingModeCount = 1
        } else {
            competingMode = sortedGrades[i]
            competingModeCount = 1
        }
    }


    // Present the results
    let spacingX = 50
    let spacingY = 100
 
    text(`Unsorted Array: \n${grades}`, spacingX, spacingY)
    text(`Sorted Array: \n${sortedGrades}`, spacingX, spacingY*2)
    text(`Greatest Grade: \n${big}`, spacingX, spacingY*3)
    text(`Least Grade: \n${small}`, spacingX, spacingY*4)
    text(`Range: \n${range}`, spacingX, spacingY*5)
    text(`Average: \n${average}`, spacingX, spacingY*6)
    if (even) {
        text("Even Length", spacingX*4, spacingY*7)
    } else if (odd) {
        text("Odd Length", spacingX*4, spacingY*7)
    }
    text(`Median: \n${median}`, spacingX, spacingY*7)
}