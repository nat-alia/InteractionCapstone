
$(document).ready(function() {
    console.log( "ready!" );

//cursor


  $(function () {
  $(".container").mousemove(function (e) {
    $(".cursor").show().css({
      "left": e.pageX,
      "top": e.pageY
    });
  }).mouseout(function () {
    $(".cursor").hide();
  });
  });


  $(".header a").click(function(){
             location.reload(true);
         });


  $(function () {
  $("body").mousedown(function (e) {
    $(".cursor").css({
      "width": "50px",
      "height": "50px"
    });
  }).mouseup(function () {
    $(".cursor").css({
      "width": "20px",
      "height": "20px"
    });
  });
  });

  //end cursor


        var numCount = 0;

        $(".starting-view").click(function() {

          if (numCount == 0){
            $(".starting-view h4").html(`Overall, 40 percent of the world’s 11,000 bird species are in decline.`);
            $(".click").html("2/4").css({"font-family": "prestige-elite-std", "font-size": "14px", "text-transform": "uppercase"});
            numCount++;
          } else if (numCount==1){
              $(".starting-view h4").html(`The populations of 1 in 8 bird species are faced with extinction.`);
              $(".click").html("3/4");
              numCount++;
          } else if (numCount==2){
                $(".starting-view h4").html(`Click and resize to see the state of bird species.`).css({"font-family": "prestige-elite-std", "font-size": "14px", "text-transform": "uppercase"});
                $(".click").html("4/4");
                numCount++;
          } else if (numCount=3){
              window.open("indexv2.html", "popupWindow", "width=400,height=600,scrollbars=yes, top=200, left=50");
              numCount = 3;
          }

        });



$(".title").mousemove(function(e){

  $(".click").show().css({
    "left": e.pageX,
    "top": e.pageY
  });

}).mouseout(function(){
  $(".click").hide();
});




// $(".sidebar_credits p").click(function(){
//   $(".credits_block").toggle(".credits_block_move");
//   $(".sidebar_credits").toggle(".credits_move");
// })

var sidebarOpen = false;

$(".sidebar_credits").click(function(){
  if(!sidebarOpen){
  $(".credits_block").animate({"left": "0px"});
  $(".sidebar_credits").animate({"left": "200px"});
  sidebarOpen = true;
} else {
  $(".credits_block").animate({"left": "-200px"});
  $(".sidebar_credits").animate({"left": "0px"});
  sidebarOpen =false;
};
});


var infobarOpen = false;

$(".sidebar_information").click(function(){
  if(!infobarOpen){
  $(".information_block").animate({"right": "0px"});
  $(".sidebar_information").animate({"right": "200px"});
  infobarOpen = true;
} else {
  $(".information_block").animate({"right": "-200px"});
  $(".sidebar_information").animate({"right": "0px"});
  infobarOpen =false;
};
});

});
