const play = () => {

    let randomNum = Math.floor(Math.random() * 3) + 1
    let userNum = parseInt(document.getElementById("selection-dropdown").value)
    //let randomObject = document.getElementsByName(randomNum.toString())
    //let userObject = document.getElementsById("selection-dropdown").name
    let result

    if (userNum === 1) {
        if (randomNum === 1) {
            result = "Jo he tret pedra i tu pedra. Empat!"
            
        }
        if (randomNum === 2) {
            result = "Jo he tret pedra i tu paper. Has guanyat..!"
            
        }
        if (randomNum === 3) {
            result = "Jo he tret pedra i tu tisores. He guanyat :)"
            
        }
    }

    if (userNum === 2) {
        if (randomNum === 1) {
            result = "Jo he tret paper i tu pedra. He guanyat"
            
        }
        if (randomNum === 2) {
            result = "Jo he tret paper i tu paper. Empat!"
            
        }
        if (randomNum === 3) {
            result = "Jo he tret paper i tu tisores. Has guanyat..."
            
        }

    }

    if (userNum === 3) {

        if (randomNum === 1) {
            result = "Jo he tret tisores i tu pedra. Has guanyat..."
            return
        }
        if (randomNum === 2) {
            result = "Jo he tret tisores i tu paper. He guanyat :)"
            return
        }
        if (randomNum === 3) {
            result = "Jo he tret tisores i tu tisores. Empat!"
            return
        }
    }
        
    

    
    document.getElementById("result-message").innerHTML = result

}
