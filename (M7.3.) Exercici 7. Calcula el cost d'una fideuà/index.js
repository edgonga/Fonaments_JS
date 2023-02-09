
const calculatePrice = () => {
    const friends = Number(document.getElementById("numberFriends-input").value)

    const noodlesUnit = (500/4)/1000
    const squidUnit = (400/4)/1000
    const shrimpUnit = (200/4)/1000

    const noodlesPrice = Number(document.getElementById("noodlesPrice-input").value)
    const squidPrice = Number(document.getElementById("squidPrice-input").value)
    const shrimpPrice = Number(document.getElementById("shrimpPrice-input").value)

    let unitPrice = noodlesPrice * noodlesUnit + squidPrice * squidUnit + shrimpPrice * shrimpUnit
    let totalPrice = unitPrice * friends
    let message = `La cantidad utilizada será de ${noodlesUnit * friends}kg de fideos, ${squidUnit * friends}kg de calamares y ${shrimpUnit * friends}kg de gambas`

    document.getElementById("PricePerPerson-message").innerHTML = `El precio por persona es de ${unitPrice}€`
    document.getElementById("TotalPrice-message").innerHTML = `El precio total es de ${totalPrice}€`
    document.getElementById("Ingredients-message").innerHTML = message
}