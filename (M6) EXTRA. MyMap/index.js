function myMap (myArr, functionToDo) {
    const result = []

    if (!functionToDo instanceof Function) {
        return "El segundo parámetro debe ser una función"
    }

    for (let index = 0; index < myArr.length; index++) {
        result.push(functionToDo(myArr[index]))
    }

    return result
}

const multiplyByTwo = (num) =>  num * 2

const multiplyByTen = (num) => num * 10

const convertToUpperCase = (str) => str.toUpperCase()

const nums = [1, 4, 9, 2, 22]
const citiesNames = ['Barcelona', 'Paris', 'Roma', 'Londres', 'Berlin']

const result = myMap(citiesNames, convertToUpperCase)

console.log(result)
//document.getElementById("result-message").innerHTML = result