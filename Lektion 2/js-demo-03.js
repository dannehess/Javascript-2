    // Arbeta med effekter i jQuery
  
  $(document).ready(function(){

            // Visa innehåll
            $('#show').click(function(){
                $('#demo1').show('500');
            });

            // Dölj innehåll
            $('#hide').click(function(){
                $('#demo1').hide('500');
            });
            
            // Toggle
            $('#demo2').click(function(){
                $('.demo2').toggle('300');
                $(this).text(function(i, text){
                    return (text === 'Visa') ? 'Dölj' : 'Visa';
                });            

            });


        }); // ready