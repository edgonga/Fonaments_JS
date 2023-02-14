const indexArray = (valueToSearch, arrayToBeSearched) => {
    arrayToBeSearched = Array.from(arrayToBeSearched)
    let indexToRetrieve = arrayToBeSearched.indexOf(valueToSearch)
    // (indexToRetrieve) 
    // ? indexToRetrieve
    // : -1
    console.log(indexToRetrieve)
}

//indexArray("1", "2993493491334")


const stringContent = (stringToSearch, subjectToBeSearched) => {
    let subjectToArray = stringToSearch.split(",")
    let subjectFiltered = subjectToArray.filter(element => element.includes(subjectToBeSearched))
    console.log(subjectToArray);
    console.log(subjectFiltered)
}

stringContent("Historia Contemporanea, Historia del Arte, Historia Francesa, Musica, Mates", "Historia") 