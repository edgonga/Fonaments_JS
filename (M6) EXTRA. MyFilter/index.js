function myFilter (myArray, conditionFunc) {
    const newArray = []

    if (!typeof(myArray) === "array") {
        return "El primer parámetro debe ser un array"
    }
    
    if (!typeof(conditionFunc) === "function") {
        return "El segundo parámetro debe ser una función"
    }

    for (let index = 0; index < myArray.length; index++) {
        newArray.push(conditionFunc(myArray[index]))
    }
    return newArray
}

function isBiggerThanFive (elementOfMyArray) {
    if (elementOfMyArray > 5) {
        return elementOfMyArray
    }
    else {
        //pop?
    }
    
}

const nums = [1, 4, 9, 2, 22]
const result = myFilter(nums, isBiggerThanFive)

console.log(result);