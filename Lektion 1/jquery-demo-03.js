// Caching jQuery objects

$(document).ready(function(){


    // Caching innebär att skapa en referens till ett jQuery-objekt
    let $myListItems = $('li');
    // OBS! $ före variabelnamnet är bara en konvention (inte obligatoriskt)
    console.log($myListItems); // Object
    console.log($myListItems.toArray()); // Array
    $myListItems.addClass('hot'); // Lägg till en klass

    $('h1').hide().show(500);



}); // ready