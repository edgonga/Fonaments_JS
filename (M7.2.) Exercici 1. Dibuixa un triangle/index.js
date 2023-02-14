const triangle = () => {
    let triangle = []
    let result = "* "
    const userLines = Number(document.getElementById("lines-input").value)

    for (let index = 0; index <= userLines; index++) {
        triangle.push(result)
        result = result + "* "
    }
    document.getElementById("triangle-message").innerHTML = triangle.join(" <br> ")
}