$(document).ready(function() {
  for(var i = 0; i < 16; i++) {
    let tr = $('<tr />')
    for(var j = 0; j < 16; j++) {
      tr.append($('<td />'));
    }
    $("table").append(tr);
  }
  $('td').hover(function() {
    $(this).css("background-color", "black");
  });
  $('.clearButton').click(function() {
    $('td').css("background-color", "white");
  });
});
