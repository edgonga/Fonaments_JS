const zoodiacOutput = () => {

    const monthSelected = parseInt(document.getElementById("month-dropdown").value)
    const daySelected = parseInt(document.getElementById("day-dropdown").value)
    

    switch (true) {
        case ((monthSelected === 3 && daySelected >= 21) || (monthSelected === 4 && daySelected <= 19)):
            zoodiacSign = "Eres Aries, te vas a morir"
            break
        
        case ((monthSelected === 4 && daySelected >= 20) || (monthSelected === 5 && daySelected <= 20)):
            zoodiacSign = "Eres Tauro, te vas a romper una pierna"
            break

        case ((monthSelected === 5 && daySelected >= 21) || (monthSelected === 6 && daySelected <= 20)):
            zoodiacSign = "Eres Géminis, hoy va a ser tu día de suerte"
            break

        case ((monthSelected === 6 && daySelected >= 21) || (monthSelected === 7 && daySelected <= 22)):
            zoodiacSign = "Eres Cancer, dejar de fumar"
            break

        case ((monthSelected === 7 && daySelected >= 23) || (monthSelected === 8 && daySelected <= 22)):
            zoodiacSign = "Eres Leo, hoy te roban"
            break

        case ((monthSelected === 8 && daySelected >= 23) || (monthSelected === 9 && daySelected <= 22)):
            zoodiacSign = "Eres Virgo, te va a ir bien en el amor"
            break

        case ((monthSelected === 9 && daySelected >= 23) || (monthSelected === 10 && daySelected <= 22)):
            zoodiacSign = "Eres Libra, acabarás divorciado"
            break

        case ((monthSelected === 10 && daySelected >= 23) || (monthSelected === 11 && daySelected <= 21)):
            zoodiacSign = "Eres Escorpió, tendrás problemas de salud"
            break

        case ((monthSelected === 11 && daySelected >= 22) || (monthSelected === 12 && daySelected <= 21)):
            zoodiacSign = "Eres Sagitario, tendrás problemas mentales"
            break

        case ((monthSelected === 12 && daySelected >= 22) || (monthSelected === 1 && daySelected <= 19)):
            zoodiacSign = "Eres Capricornio, tendrás problemas mentales"
            break

        case ((monthSelected === 1 && daySelected >= 20) || (monthSelected === 2 && daySelected <= 18)):
            zoodiacSign = "Eres Aquario, no te irá mal"
            break

        case ((monthSelected === 2 && daySelected >= 19) || (monthSelected === 3 && daySelected <= 20)):
            zoodiacSign = "Eres Piscis, empieza a ahorrar"
            break
    }

    document.getElementById("zoodiac-message").innerHTML = zoodiacSign
}