function myFilter (myArray, conditionFunc) {
    const newArray = []

    if (!typeof(myArray) === "array") {
        return "El primer parámetro debe ser un array"
    }
    
    if (!typeof(conditionFunc) === "function") {
        return "El segundo parámetro debe ser una función"
    }
    
    for (let index = 0; index < myArray.length; index++) {
        if (conditionFunc(myArray[index])) {
            newArray.push(conditionFunc(myArray[index]))
        } 
    }
    return newArray
}

function isBiggerThanFive (elementOfMyArray) {
    if (elementOfMyArray > 5) {
        return elementOfMyArray
    }    
}

function isEvenNumber (numOfMyArray) {
    if (numOfMyArray % 2 === 0) {
        return numOfMyArray
    }
}

function startsByB (city) {
    if (city[0] === "B") {
        return city
    }
}

function isGrilloFamily (key) {
    if (key.surname === "Grillo") {
        const values = {name: key.name, surname: key.surname}
        return values
    }
}

const nums = [1, 4, 9, 2, 22]
const grilloFamily = [
    { name: 'Pepita', surname: 'Grillo', age: 95 },
    { name: 'Maria', surname: 'Martinez', age: 35 },
    { name: 'Pepito', surname: 'Grillo', age: 110 },
    { name: 'Pepito', surname: 'Sanchez', age: 45 }
 ]

const arrayOfCities = ['Barcelona','Paris','Roma','Londres','Berlin']
const evenOrOdd = [1,2,3,4,5,6,7,8,9,10]

const resultBiggerThanFive = myFilter(nums, isBiggerThanFive)
console.log(resultBiggerThanFive);

const resultIsEvenNumber = myFilter(evenOrOdd, isEvenNumber)
console.log(resultIsEvenNumber);

const resultStartsByB = myFilter(arrayOfCities, startsByB)
console.log(resultStartsByB);

const resultIsGrilloFamily = myFilter(grilloFamily, isGrilloFamily)
//console.log(resultIsGrilloFamily);

const grilloFamilyFormated = resultIsGrilloFamily.map(function(object) {
    return `Name: ${object.name} Surname: ${object.surname}`
})



document.getElementById("result-message").innerHTML = `${resultBiggerThanFive} <br> ${resultIsEvenNumber} <br> ${resultStartsByB} <br> ${grilloFamilyFormated}`
