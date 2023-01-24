
const showInfo = () => {
    const inputMonth = parseInt(document.getElementById("month-input").value)
    switch (inputMonth) {
        case 1:
            month = "El mes de gener té 31 dies"
            break
        
        case 2:
            month = "El mes de febrer té 28 dies"
            break 
            
        case 3:
            month = "El mes de març té 31 dies"
            break

        case 4:
            month = "El mes de abril té 30 dies"
            break
        
        case 5:
            month = "El mes de maig té 31 dies"
            break 
            
        case 6:
            month = "El mes de juny té 30 dies"
            break

        case 7:
            month = "El mes de juliol té 31 dies"
            break
        
        case 8:
            month = "El mes de agost té 30 dies"
            break 
            
        case 9:
            month = "El mes de setembre té 31 dies"
            break

        case 10:
            month = "El mes de octubre té 31 dies"
            break
        
        case 11:
            month = "El mes de novembre té 30 dies"
            break 
            
        case 12:
            month = "El mes de decembre té 31 dies"
            break


    }

    document.getElementById("month-message").innerHTML = month

}