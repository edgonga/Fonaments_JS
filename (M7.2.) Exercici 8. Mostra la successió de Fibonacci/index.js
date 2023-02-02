const startSeries = () => {
    const seriesLength = parseInt(document.getElementById("length-input").value)

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

    document.getElementById("result-message").innerHTML = series.join(",")
} 