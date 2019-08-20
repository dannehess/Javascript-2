        // Arbeta med Events

        $(document).ready(function(){

            // Click
            $('#demo1').click(function(){
                $(this).hide();
            });

            // Doubleclick
            $('#demo2').dblclick(function(){
                $(this).hide();
            });

            // Mouseenter
            $('#demo3').mouseenter(function(){
                $(this).html('Demo på mouseenter');
            });

            // Mouseout
            $('#demo3').mouseout(function(){
            $(this).html('Demo på mouseout')
            });

            // Mousedown
            $('#demo4').mousedown(function(){
                $(this).html('Demo på mousedown');
            });

            // Mouseup
            $('#demo4').mouseup(function(){
            $(this).html('Demo på mouseup')
            });

            /*
            // Hover
            $('#demo5').hover(inFunction, outFunction);
            
            function inFunction(){
                $(this).css('background-color', 'yellow');
            };
            function inFunction(){
                $(this).css('background-color', 'pink');
            };  
            
            */

            // Focus
            $('input').focus(function(){
                $(this).css('background-color', 'gold');
            });

            // Blur
            $('input').blur(function(){
                $(this).css('background-color', 'white');
            });

            // Metoden on
            $('#demo7')
            .on('click', function(){
                $(this).html('click har aktiverats!');
            })
            .on('dblclick', function(){
                $(this).html('dblclick har aktiverats!');
            });

            

        }); // ready
