$(document).ready(function() {
  for(var i = 0; i < 16; i++) {
    for(var j = 0; j < 16; j++) {
      $('.container').append("<div class='box'></div>");
    }
    $('.container').append("<div class='endBox'></div>")
  }
  $('.box').hover(function() {
    $(this).css("background-color", "black");
  });
  $('.clearButton').click(function() {
    var prompt = prompt("How many boxes?");
    $('.box').remove();
    for(var i = 0; i < prompt; i++) {
      for(var j = 0; j < prompt; j++) {
        $('.container').append("<div class='box'></div>");
      }
      $('.container').append("<div class='endBox'></div>")
    }
  });
});
