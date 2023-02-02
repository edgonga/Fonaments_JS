const startSeries = (length) => {
    const seriesLength = length

    let series = []
    let counter = 0
    for (let index = 0; index <= seriesLength; index++) {
        if (index === 0) {

            series.push(counter)
            counter = counter + 1
        }
        console.log("Series ---> " + series);
        console.log(typeof(series));
        console.log("Counter ---> " + counter);
        console.log("Index ---> " + index);
        console.log("-------------------------------");
        series.push(counter)
        let previous = series[index]
        console.log("Previous ---> " + previous);
        counter = counter + previous
    }
}

startSeries(6)