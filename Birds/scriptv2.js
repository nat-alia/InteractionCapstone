
$(document).ready(function() {
    console.log( "ready!" );

    $(window).resize(function(){

      $("div.animal-image").css("visibility", "visible");
      $(".population").css("visibility", "visible");
      $(".name").css("visibility", "visible");
      // $(".starting-view").css("visibility", "hidden");


      // if ($(window).height() <= 500){
      //   $(".starting-view").css("visibility", "visible");
      //   $(".starting-view h4").html("Birds aren't real.").css({"color": "white", "z-index": "10"});
      //   $(".animal-image").css("z-index", "-5");
      //   $(".starting-view p").html("Wake up from the lie.").css("color", "white");
      //   $("body").css("background-color", "black");
      //   $(".animal-container").css("visibility", "hidden");
      // }
      //
      // if ($(window).height() > 500){
      //   $("div.animal-image").css("visibility", "visible");
      //   $(".population").css("visibility", "visible");
      //   $(".starting-view").css("visibility", "hidden");
      //   $("body").css("background-color", "white");
      //   $(".animal-container").css("visibility", "visible");
      //
      // }
      //
      //
      // //do it from bigger number down
      // if ($(window).width() <= 900){
      //   $("h4.name").html("Blue-Billed Curassow");
      //   $("p.number-num").html("From 250-500");
      //   $("div.animal-image").css("background-image", "url(img/bluebilled_edit.png)");
      // }
      //
      //
      // if ($(window).width() <= 800){
      //   $("h4.name").html("Guam Rail");
      //   $("p.number-num").html("Around 200 Left");
      //   $("div.animal-image").css("background-image", "url(img/guamrail2edit.png)");
      // }
      //
      //
    	// if ($(window).width() <= 700){
      //   $("h4.name").html("Hawaiian Crow");
      //   $("p.number-num").html("Around 85");
      //   $("div.animal-image").css("background-image", "url(img/HawaiianCrow_black.png)");
    	// }






    });



});
