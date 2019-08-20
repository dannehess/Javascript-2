$(document).ready(function(){

    // Type Selector
     // $('p').hide();

    // ID Selector
    $('#demo').hide();

    // Class Selector
    $(document).ready(function(){
        $('.demo').hide();

    // Universal Selector
    // $('*').hide();

    // Groups of selectors
    $('h1,h2').hide();

    $('#header, .demo').hide();

    // Descendant combinator
    $('li a').hide();

    // Child combinators
    // Ta bort alla barnelement av typen p
    // som finns direkt under en div
    // $('div > p').hide();

    // p:first
    
    // Sibling combinators
    // $('div + p').hide();

    // ~ Subsequent-sibling combinator
    $('article ~ p').hide();

    // This Selector (viktigt)
    $('p').click(function(){
        $(this).hide()})

    });

}); // Avsluta ready.