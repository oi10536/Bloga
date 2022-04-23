
<!-- Resizing Font -->

$(document).ready(function() {
  var resize = new Array('p', '#story-content', '.resizable');
  resize = resize.join(',');

  //resets the font size when "reset" is clicked
  var resetFont = $(resize).css('font-size');
  $(".reset").click(function() {
    $(resize).css('font-size', resetFont);
  });

  //increases font size when "+" is clicked
  $(".increase").click(function() {
    var originalFontSize = $(resize).css('font-size');
    var originalFontNumber = parseFloat(originalFontSize, 10);
    var newFontSize = originalFontNumber * 1.2;
    $(resize).css('font-size', newFontSize);
    return false;
  });

  //decrease font size when "-" is clicked

  $(".decrease").click(function() {
    var originalFontSize = $(resize).css('font-size');
    var originalFontNumber = parseFloat(originalFontSize, 10);
    var newFontSize = originalFontNumber * 0.8;
    $(resize).css('font-size', newFontSize);
    return false;
  });

});


<!-- spoiler -->
function btn_chapter(spoiler,btn) {
  if(document.getElementById(spoiler).style.display == "")
  {
  document.getElementById(spoiler).style.display = "none"
  document.getElementById (btn). className = "buttonChapter";
  }else
  {
  document.getElementById(spoiler).style.display = ""
  document.getElementById (btn). className = "buttonChapterClicked";
  }
}


