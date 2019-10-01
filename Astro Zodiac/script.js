
$( document ).ready(function() {
    console.log( "ready!" );

//resizing stars

    $("svg").mouseover(function(){
    var size = ((Math.random() * 15) + 10);

    $(this).css({
    width: size + "px",
    height: size + "px",
    })

    $(".cursor").animate({

    }, 100)

    });

$("svg").mouseout(function(){
  $(".cursor").animate({

  }, 100)
    });

//cursor

    $(function () {
     $("body").mousemove(function (e) {
       $(".cursor").show().css({
         "left": e.pageX,
         "top": e.pageY
       });

     }).mouseout(function () {
       $(".cursor").hide();

     });
     });


//mouseout to black

       // $("html").mouseover(function(){
       //   $("#name-scene").css({
       //     backgroundColor: "white"
       //   });
       //
       //   $("#scene").css({
       //     backgroundColor: "black"
       //   });
       // });
       //
       // $("html").mouseout(function(){
       //   $("#name-scene").css({
       //     backgroundColor: "black"
       //   });
       //
       //   $("#scene").css({
       //     backgroundColor: "white"
       //   });
       // });


      //snap scroll to left

var homepage = true;


$(".blackblock").mouseover(function(){
      if (homepage == true){

      $(".cursor").animate({
        width: "20px",
        height: "20px"
      }, 300)

      $(".blackblock").animate({
        width: "60px",
        left: "96%"
      }, 300)

    } else if (homepage == false) {


    $(".cursor").animate({
      width: "20px",
      height: "20px"
    }, 300)

    $(".blackblock").animate({
      width: "60px",
    }, 300)
  }
});


//mouseout

$(".blackblock").mouseout(function(){
  if (homepage == true){

    $(".cursor").animate({
      width: "35px",
      height: "35px"
    }, 500)

    $(".blackblock").animate({
      width: "35px",
      left: "97%"
    }, 300)

  } else if (homepage==false){

    $(".cursor").animate({
      width: "35px",
      height: "35px"
    }, 500)

    $(".blackblock").animate({
      width: "35px",
    }, 300)

  }
});



            $(".blackblock").click(function(){

//if we click block and are on homepage
              if (homepage == true){

                $('body,html').animate({
                       scrollTop : 0                       // Scroll to top of body
                   }, 500);

                  $("#scene").delay(500).animate({
                    left: "90px"
                  }, 1000)

                  $("#name-scene").delay(500).animate({
                    left: "-100vw"
                  }, 1000)

                  $(".blackblock").delay(500).animate({
                    left: "0px"
                  }, 500)

                  $(".blackblock").toggleClass("white");


                  $("body").css({
                    "background-color": "black"
                  })



                  $("body").toggleClass("body-overflow");

                  $(".cursor").css({
                    "background-color": "black",
                    "border": "1px solid white",
                  })

                  homepage = false;

            } else if (homepage == false) {
              $("#scene").animate({
                left: "100vw"
              }, 1000)

              $("#name-scene").animate({
                left: "0"
              }, 1000)

              $(".blackblock").animate({
                left: "97%",
              }, 1000)

              $(".blackblock").toggleClass("white");

              $("body").toggleClass("body-overflow");


              $(".cursor").css({
                "background-color": "white",
                "border": "1px solid black",
                width: "8px",
                height: "8px"
              })

              $("body").css({
                backgroundColor: "white",
              });
              homepage = true;
            }
          });





  //decreasing the cursor size at the arrows








$("#scene").mouseover(function(){
  $(".cursor").animate({
    width: "25px",
    height: "25px"
  })

})


});
