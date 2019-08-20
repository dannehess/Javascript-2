/*

// The Global Scope
var daniel = "Daniel"; // Läggs till i objektet window (OBS! var)
// OBS! Variabler ed let eller const läggs inte till i window
let kalle = "Kalle"; // Läggs till i Script-Scope / Script-filen (OBS! let)
console.log(daniel + ' globalt');
console.log(kalle + ' globalt');

function demo(){
    // Funktioner har ett eget scope
    // men har tillgång till över scope
    console.log(daniel + ' från funktionen demo');
    console.log(kalle + ' från funktionen demo');
    function inner(){
        console.log(daniel + ' inne i funktionen inner');
        console.log(pelle + ' inne i funktionen inner');
    };
    inner();
};
demo();

console.log("-----------------------------");

var pelle = "Pelle";

function demo2(){
    console.log(pelle); // Funkar med både var och let
    console.log(window.pelle); // Funkar bara med var
    console.log(this.pelle); // Funkar bara med var
};
demo2();

*/

/*

function demo(){
    let daniel = "daniel";
    console.log(daniel + ' inne i demo');
}
demo();

console.log(daniel + 'utanför demo'); // daniel är en lokal variabel

*/

/*

// Lokala variabler 
function demo(){
let olle = "Olle är en lokal variabel i funktionen demo";
console.log(olle);
}
demo();

console.log(olle); // ReferenceError: olle is not defined
// olle finns bara i funktionen demo
// olle finns inte globalt
// Det spelar ingen roll om vi deklarerar med var, let eller const

*/

/*

let daniel = "Hessling";

function demo3(){
    let daniel = "Daniel";
    console.log(daniel + ' inne i demo');
}
demo3();

console.log(daniel + ' utanför demo');

*/

// OBS!

/*

let daniel = "Daniel";

function demo(){
hessling = "Hessling"
console.log(daniel + ' ' + hessling);
}
demo();

console.log(daniel); // Farligt men vanligt
// Borde vi inte få ReferenceError?
// daniel läggs till i objektet window
// Vi har glömt var, let eller const på rad 83

// Variabler som deklareras med let och const är lokala inne i blocket
// OBS! var har inte Block-Scope

*/

// Block Scope (Fr.o.m ES6)
// let och const har Block Scope
// {} Block Scope

/*

{
    let daniel = "Hello";
    console.log(daniel);
    // OBS! daniel finns tillgänglig enbart i detta block

    array = [1,2];
    for( let i = 0; i < array.length; i++){
        const element = array[i];
        console.log(element);
    }
}

    // Vad händer om vi försöker skriva ut utanför blocket
   // console.log(i); // Uncaught ReferenceError: i is not defined
   // console.log(element);  // Uncaught ReferenceError: element is not defined

    if(true){
        let test = 123;
        console.log(test);
    }
        // console.log(test); // ReferenceError: element is not defined

        */


// Closures
// ------------------------------------------------------
// När du returnerar en funktion inuti en yttre funktion 
// skapas automatiskt en closure. Den inre funktionen har
// tillgång till den yttre funktionens variabler även fast
// den yttre funktionen har körts klart.
/*

function outer(){
    let a = 1;
    return function inner(){
        console.log(a);
    };
}
let inner = outer();
inner();

// En Closure
function outer(){
    let a = 1;
    return function (b){
        a = a + b;
        console.log(a);
    };
}
let inner = outer();
inner(1);
inner(2);

*/

// Immediately-invoked function expression
(function(){
    console.log('Jag är en IIFE');
})();

// En closure i en IIFE

let inner = (function(){
    let a = 1;
    return function (b) {
        a = a +b;
        console.log(a);
    }
})();
    inner(1);
    inner(2);

// IIFE - kan skapa ett script-bibliotek

// Tyler Mcginnis 