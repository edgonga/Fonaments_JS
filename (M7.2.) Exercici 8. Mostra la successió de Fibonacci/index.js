let series = []

const startSeries = (num) => {

    
    if (num < 2) {
        series.push(num)
        return series
    }
    else {
        series.push(startSeries(num -1) + startSeries(num -2))
        // console.log("-1 ------->" +startSeries(num -1));
        // console.log("-2 ------->" + startSeries(num -2));
        return series
    }


    
}

const length = parseInt(document.getElementById("length-input").value)

if (length <= 0) {
    alert("Debes introducir un número mayor que 0")
}

else {
    for (let index = 0; index <= length; index++) {
        startSeries(index)
    }
}

document.getElementById("result-message").innerHTML = series.join(",")