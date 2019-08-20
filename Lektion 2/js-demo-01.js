
// Manipulera CSS med jQuery

$(document).ready(function () {

            // Lägga till eller ändra en CSS-egenskap
            $('#demo1').click(function () {
                $('.demo1').css('color', 'pink');
            });

            // Lägga till eller ändra flera CSS-egenskap
            $('#demo2').click(function () {
                $('.demo2').css({
                    'color': 'white',
                    'background-color': 'black',
                    'font-size': '2em'
                });

                // Hämta CSS-egenskaper
                let $myColor = $('.demo2').css('color');
                console.log($myColor);
            });

            // Lägga till en CSS-klass
            $('#demo3').click(function(){
                $('.demo3').addClass('blue');
            });

            // Lägg till flera BS-Klasser
            $('#demo4').click(function(){
                $('.demo4').addClass('alert alert-success');
            });

            // Ta bort BS-klasser
            $('#demo5').click(function(){
                $('.demo4').removeClass('alert alert-success');
            });

            // Växla mellan klasser (toggle)
            $('#demo6').click(function(){
                $('.demo4').toggle('alert alert-success');
            });

            // Lägg till alert, ändra knappens text


            $('#demo7').click(function(){
            $('.demo4').toggleClass('alert alert-success');

            // Ändra text på knappen
            // Ternary Operator ? :
            $(this).text() === 'Lägg till klassen alert' ?
            $(this).text('Ta bort klassen alert') :
            $(this).text('Lägg till klassen alert');
            });

            //

        }); // ready