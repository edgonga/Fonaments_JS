// console.log("hola mundo");

// alert("Welcome to my web")

// const myName = prompt("Introduce tu nombre")

// console.log("Bienvenido " + myName);


// const isOver18 = confirm("Eres mayor de edad?")

// console.log(myName + " es mayor de edad: " + isOver18);




function saveUserName () {

    const username = document.getElementById("input-name").value
    //console.log("Welcome " + username);

    document.getElementById("welcome-message").innerHTML = "Welcome " + username

}