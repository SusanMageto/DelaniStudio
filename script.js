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
// $(document).ready (function (){
//   $("#im1").hover(function()
//   {
//     $("#im1"). css("background-color", "white");
//   })
// })
$(document).ready(function(){
  $("button").click(function(){
    alert("The paragraph was clicked.");
  });
});