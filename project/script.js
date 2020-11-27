$(function() {
  $("button").click(function() {
    $.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://bemyfr1end.herokuapp.com/test2.wav",
      type: "GET",
      dataType: 'binary',
      success: function(result) {
        var url = URL.createObjectURL(result);
        var $a = $('<a />', {
          'href': url,
          'download': 'document.pdf',
          'text': "click"
        }).hide().appendTo("body")[0].click();
        setTimeout(function() {
          URL.revokeObjectURL(url);
        }, 10000);
      }
    });
  });
});