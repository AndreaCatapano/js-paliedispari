let userChoiceInput;
let userNumberInput;
let isInputValid;

do {
    userChoiceInput = (prompt(`Scegli tra:"Pari" o "Dispari"`)).toLowerCase();
    const isPari = userChoiceInput === "pari";
    const isDispari = userChoiceInput === "dispari";

    if (isPari || isDispari) {
        userNumberInput = parseInt(prompt("Scrivi un numero da 1 a 5!"));
        const isANumber = !isNaN(userNumberInput);
        const isValidNumber = userNumberInput >= 1 && userNumberInput <= 5;
        if (isANumber && isValidNumber) {
            const randomNumber = randomNumber5();
            console.log(randomNumber)
            let result = userNumberInput + randomNumber;
            let isEven = checkEvenNumber(result);

            if ((isEven && isPari) || (!isEven && isDispari)){
                console.log("Hai indovinato")
            } else {
                console.log("Hai sbagliato")
            }
 
            isInputValid = true;
        } else {
            alert("Inserisci un numero da 1 a 5!");
            isInputValid = false;
        } 
    } else {
        alert(`Inserisci una scelta valida tra: "Pari" o "Dispari"`);
        isInputValid = false;
    }
} while (!isInputValid)


function randomNumber5 (){
    return Math.floor(Math.random() * 5) + 1;
}

function checkEvenNumber (result) {
    return result % 2 === 0; 
}
