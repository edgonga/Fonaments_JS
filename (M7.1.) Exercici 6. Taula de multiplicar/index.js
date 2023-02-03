

const multiply = () => {

    let numberSelected = parseInt(document.getElementById("selection-dropdown").value)
    debugger
    console.log(numberSelected);
    console.log(typeof(numberSelected));
    let messageX = "multX-message"

    for (let index = 1; index <= 10; index++) {
        let messageID = messageX.replace("X", index.toString())
        
        let result = numberSelected * index
        
        document.getElementById(messageID).innerHTML = `${numberSelected} x ${index} = ${result}`
    }
}