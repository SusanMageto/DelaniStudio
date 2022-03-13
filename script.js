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
  $("#work4").mouseover(function(){
    $("#exp1").show();
  }).mouseout(function(){
    $("#exp1").hide();
  });
});


$("form").submit(function () {
  alert(
    "Hi " +
      $("input[name='name']").val() +
      " we have received your message. Thank you for reaching out to us."
  );
}); 
