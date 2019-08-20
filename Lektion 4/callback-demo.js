// Callback demo

// Exempel från MDN
// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

// Läs in data och skicka vidare till en annan funktion
function processUserInput(callback_function){

    // Läs in data från en prompt
    let name = prompt('Vad heter du?');

    // Anrop till en annnan funktion
    // som skickas in som argument till processUserInput
    callback_function(name);    
}

// En funktion som visar en alert
function greetingAlert(name){
    alert('Hej ' + name);
};

// En funktion som skickar ett meddelande till console
function greetingConsole(name){
    console.log('Hej ' + name);
};

// processUserInput(greetingAlert);
// processUserInput(greetingConsole);

// Exempel 2

// Synkron (Synchronous) callback
let myArray = ['a', 'b', 'c'];
console.log(myArray);

// https://www.w3schools.com/jsref/jsref_foreach.asp

console.log('START');

myArray.forEach(function(element){
console.log(element);
})

// Exempel 3
console.log('Asynkron (Asynchronoius) callback');

console.log('START');

//For of jobbar med elementen
setTimeout(function(){
    for(const element of myArray){
        console.log(element);
    }
}, 10000);
// Vi går vidare till nästa sats
// och kommer tillbaka (Callback) efter 10 sekunder

console.log('SLUT');

// tecken minstar counter textarea