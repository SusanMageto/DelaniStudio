$(document).ready (function (){
  $("#icon1").on ("click", function()
  {
    $(".card-body1"). toggle();
  })
})
$(document).ready (function (){
  $("#icon2").on ("click", function()
  {
    $(".card-body2"). toggle();
  })
})
$(document).ready (function (){
  $("#icon3").on ("click", function()
  {
    $(".card-body3"). toggle();
  })
})
$('form').submit(function(){
  alert("Hi "+ $("input[name='name']").val()+ " we have received your message. Thank you for reaching out to us.");
});