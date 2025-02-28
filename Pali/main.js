const userInput = prompt("Inserisci la tua parola")

const reverseUserInput = isWordPalindrome(userInput);

const isPalindrome = userInput === reverseUserInput; 

if(isPalindrome){
    console.log(`${userInput} è una parola palindroma`);
} else {
    console.log(`${userInput} NON è una parola palindroma`);
}

 function isWordPalindrome (userInput){
    const splitString = userInput.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    return joinArray
 }