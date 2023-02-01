const even100 = () => {
    let index = 2
    let result = []
    while (index <= 100) {
        result.push(index)
        index += 2
    }
    finalResult = result.join(" - ")
    document.getElementById("result-message").innerHTML = finalResult
}