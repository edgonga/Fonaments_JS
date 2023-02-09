let temps = []

const actualTime = () => {
    let today = new Date()
    let date = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate()
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    let dateTime = `${date} ${time}`
    temps.push(dateTime)
    document.getElementById("actualTime-message").innerHTML = temps
}

const indexArray = (valueToSearch, arrayToBeSearched) => {
    arrayToBeSearched = Array.from(arrayToBeSearched)
    let indexToRetrieve = arrayToBeSearched.indexOf(valueToSearch)
    if (!indexToRetrieve) {
        indexToRetrieve = -1
    }

    document.getElementById("index-message").innerHTML = indexToRetrieve
}

const lowerWithoutSpaces = (rawSentences) => {
    const lowerSentences = rawSentences.toLowerCase()
    const withoutSpaces = lowerSentences.replaceAll(" ", "")
    const withoutPuntuation = withoutSpaces.replaceAll(/[.,\/#!$%"\^&\*;:{}=\-_`~()]/g,"")
    const finalString = withoutPuntuation.normalize("NFD").replace(/\p{Diacritic}/gu, "")
    document.getElementById("sentence-message").innerHTML = finalString
}

const stringContent = (stringToSearch, subjectToBeSearched) => {
    let subjectToArray = stringToSearch.split(",")
    let subjectFiltered = subjectToArray.filter(element => element.includes(subjectToBeSearched))
    document.getElementById("stringMatch-message").innerHTML = subjectFiltered
}

const menu = (numCondition) => {
    if (numCondition === 1) {
        actualTime()
    }

    if (numCondition === 2) {
        let valueInput = document.getElementById("value-input").value
        let arrayIndexInput = document.getElementById("arrayIndex-input").value
        indexArray(valueInput, arrayIndexInput)
    }

    if (numCondition === 3) {
        let inputSentence = document.getElementById("sentence-input").value
        lowerWithoutSpaces(inputSentence)
    }

    if (numCondition === 4) {
        let arrayContent = document.getElementById("arrayContent-input").value
        let wordContent = document.getElementById("wordContent-input").value
        stringContent(arrayContent, wordContent)
    }
}