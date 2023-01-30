const showAverageMark = () => {
    let firstSemester = document.getElementById("input-firstSemester").value
    let secondSemester = document.getElementById("input-secondSemester").value
    let thirdSemester = document.getElementById("input-thirdSemester").value

    const onlyNumbers = /^\d+$/

    if (!firstSemester.match(onlyNumbers)) {
        throw new Error("Debes introducir un número")

    }

    if (!secondSemester.match(onlyNumbers)) {
        throw new Error("Debes introducir un número")

    }

    if (!thirdSemester.match(onlyNumbers)) {
        throw new Error("Debes introducir un número")

    }

    const totalAverage = (parseInt(firstSemester) + parseInt(secondSemester) + parseInt(thirdSemester)) / 3
    document.getElementById("average-message").innerHTML = totalAverage
}