$(document).ready(function() {
  for(var i = 0; i < 16; i++) {
    let tr = $('<tr />')
    for(var j = 0; j < 16; j++) {
      tr.append($('<td />'));
    }
    $("table").append(tr);
  }
  $('.clearButton').click(function() {
    var prompt = window.prompt("How many rows and columns would you like?", "16");
    if(prompt != null) {
      $('tr').remove();
      for (var y = 0; y < prompt; y++) {
        let row = $('<tr />');
        for(var z = 0; z < prompt; z++) {
          row.append($('<td />'));
        }
        $("table").append(row);
      }
      $('td').hover(function() {
        $(this).css("background-color", "black");
      });
    }
  });
  $('td').hover(function() {
    $(this).css("background-color", "black");
  });
});
