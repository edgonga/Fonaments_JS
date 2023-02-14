let result = []
const myMap = (myArr, functionToDo) => {
    
    if (! functionToDo instanceof Function) { 
        return console.log("El segundo parámetro debe ser una función")
    }
        
    
    //console.log("Dentro función");
    for (let index = 0; index < myArr.length; index++) {
        result.push(functionToDo(array1[index]))


    }
    document.getElementById("result-message").innerHTML = result
    console.log(result)
    return result
} 
   



const multiplyByTwo = (num) => {
    return num * 2
}

const multiplyByTen = (num) => {
    return num * 10
}

const convertToUpperCase = (str) => {
    return str.toUpperCase()
}

array1 = [1, 4, 9, 2, 22]


//myMap(array1, 44)  // To check if validation of the second parameter to be a function works properly
myMap(array1, multiplyByTwo)