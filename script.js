$(document).ready(function() {
  for(var i = 0; i < 16; i++) {
    $('.container').append('<tr>');
    for(var j = 0; j < 15; j++) {
      $('.container').append("<td class='box'></td>");
    }
    $('.container').append("</tr>");
  }
  $('td').hover(function() {
    $(this).css("background-color", "black");
  });
  $('.clearButton').click(function() {
    $('td').css("background-color", "white");
  });
});
