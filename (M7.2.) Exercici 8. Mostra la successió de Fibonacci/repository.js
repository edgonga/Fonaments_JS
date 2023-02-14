// This version is not using recursive functionality
// and works well if you don't ask for 1 or 2 characters long
// Anyway, by using recursive feature, the implementation looks smoother and more comprehensive

const startSeries = (length) => {
    const seriesLength = length

    let series = []
    let counter = 0
    for (let index = 0; index <= seriesLength - 2; index++) {
        if (index === 0) {
            series.push(counter)
            counter = counter + 1
        }
        series.push(counter)
        let previous = parseInt(series[index])
        counter = counter + previous
    }

    console.log(series.join(","))
} 



