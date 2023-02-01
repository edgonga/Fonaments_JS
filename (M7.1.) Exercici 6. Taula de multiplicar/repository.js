const multiply = (num) => {
    let numberSelected = num
    let messageID = "multX-message"

    for (let index = 1; index <= 10; index++) {
        
        messageX = messageID.replace("X", index.toString())
        console.log(messageX);
        let result = numberSelected * index
        console.log(result);
        
        console.log(`${numberSelected} x ${index} = ${result}`)
    }
}

multiply(2)
