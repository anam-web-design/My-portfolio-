(function(){

  'use strict';

  var ids = [
    'home',
    'about',
    'skills',
    'projects',
    'services',
    'contact'
  ];

  var links = document.querySelectorAll(
    '.rail a, nav ul a'
  );

  var revealItems = document.querySelectorAll(
    '.reveal'
  );


  /* ==================== ACTIVE SECTION ==================== */

  function mark(id){

    links.forEach(function(a){

      a.classList.toggle(
        'on',
        a.getAttribute('href') === '#' + id
      );

    });

  }


  if('IntersectionObserver' in window){

    var sectionObserver =
      new IntersectionObserver(

        function(entries){

          entries.forEach(
            function(entry){

              if(entry.isIntersecting){

                mark(entry.target.id);

              }

            }
          );

        },

        {
          rootMargin:'-40% 0px -55% 0px'
        }

      );


    ids.forEach(function(id){

      var element =
        document.getElementById(id);

      if(element){

        sectionObserver.observe(element);

      }

    });

  }


  /* ==================== SCROLL REVEAL ==================== */

  if('IntersectionObserver' in window){

    var revealObserver =
      new IntersectionObserver(

        function(entries){

          entries.forEach(
            function(entry){

              if(entry.isIntersecting){

                entry.target.classList.add(
                  'visible'
                );

                revealObserver.unobserve(
                  entry.target
                );

              }

            }
          );

        },

        {
          threshold:0.12
        }

      );


    revealItems.forEach(
      function(item,index){

        item.style.transitionDelay =
          Math.min(
            index * 0.04,
            0.25
          ) + 's';

        revealObserver.observe(item);

      }
    );

  }else{

    revealItems.forEach(
      function(item){

        item.classList.add(
          'visible'
        );

      }
    );

  }

})();