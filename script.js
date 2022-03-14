$(document).ready(function () {
  $("#card-1").on("click", function () {
    $("#card-1").slideDown("1000").hide("1000");
    $("#card-body1").show("1000");
  });
});
$("#card-body1").click(function () {
  $("#card-body1").slideUp("1000");
  $("#card-1").slideDown("1000");
});
$(document).ready(function () {
  $("#card-2").on("click", function () {
    $("#card-2").slideDown("1000").hide("1000");
    $("#card-body2").show("1000");
  });
});
$("#card-body2").click(function () {
  $("#card-body2").slideUp("1000");
  $("#card-2").slideDown("1000");
});
$(document).ready(function () {
  $("#card-3").on("click", function () {
    $("#card-3").slideDown("1000").hide("1000");
    $("#card-body3").show("1000");
  });
});
$("#card-body3").click(function () {
  $("#card-body3").slideUp("1000");
  $("#card-3").slideDown("1000");
});

$(document).ready(function(){
  $(".one").mouseover(function(){
    $("#uno1").show();
  }).mouseout(function(){
    $("#uno1").hide();
  });
});
$(document).ready(function(){
  $(".two").mouseover(function(){
    $("#uno2").show();
  }).mouseout(function(){
    $("#uno2").hide();
  });
});
$(document).ready(function(){
  $(".three").mouseover(function(){
    $("#uno3").show();
  }).mouseout(function(){
    $("#uno3").hide();
  });
});
$(document).ready(function(){
  $(".four").mouseover(function(){
    $("#uno4").show();
  }).mouseout(function(){
    $("#uno4").hide();
  });
});
$(document).ready(function(){
  $(".five").mouseover(function(){
    $("#uno5").show();
  }).mouseout(function(){
    $("#uno5").hide();
  });
});
$(document).ready(function(){
  $(".six").mouseover(function(){
    $("#uno6").show();
  }).mouseout(function(){
    $("#uno6").hide();
  });
});
$(document).ready(function(){
  $(".seven").mouseover(function(){
    $("#uno7").show();
  }).mouseout(function(){
    $("#uno7").hide();
  });
});
$(document).ready(function(){
  $(".eight").mouseover(function(){
    $("#uno8").show();
  }).mouseout(function(){
    $("#uno8").hide();
  });
});

$("form").submit(function () {
  alert(
    "Hi " +
      $("input[name='name']").val() +
      " we have received your message. Thank you for reaching out to us."
  );
}); 
