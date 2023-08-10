
        $(document).ready(function() {
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/posts',
                method: 'GET',
                success: function(data) {

                    const hotels = data;
                    console.log (hotels);


                    const sectionContainer = $('.section-container');
                    hotels.forEach(function(hotel) {
                        const section = $('<div class="section">');
                  
                    });
                },
                error: function() {
                    console.log('Error fetching data from the API');
                }
            });
        });

        $(document).ready(function() {
            $(".thumbnail-slider .thumbnail").click(function() {
              var index = $(this).index();
              $(".main-slider img").fadeOut(300);
              $(".main-slider img").eq(index).fadeIn(300);
            });
          });