   $(window).load(function() {

       init();

       function init() {
           new Vivus('logo-wrapper', { type: 'async', duration: 800, file: 'img/logo.svg' });

           setTimeout(fill, 2600);
           changeImgSize();
           $(window).resize(changeImgSize);

           $('.sidebar-nav li > a').on('click', function() {
               $('#menu-close').click();
           });



       }

       function fill() {
           var logo = document.getElementById('logo');
           logo.classList.add('finished');
       }


       function changeImgSize() {
           var width = $(window).width();

           if (width < 992) {
               $('.imgChange').each(function() {
                   $(this).attr("src", $(this).attr("src").replace('_large', '_small'));
               });
           } else {
               $('.imgChange').each(function() {
                   $(this).attr("src", $(this).attr("src").replace('_small', '_large'));
               });
           }
       }






   });
