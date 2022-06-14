function getSize() {
  size = $( ".read" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size" ).text(  size  );
}
getSize();
$( "#up" ).on( "click", function() {
  if ((size + 2) <= 72) {
    $( ".read" ).css( "font-size", "+=2" );
    $( "#font-size" ).text(  size += 2 );
  }
});

$( "#down" ).on( "click", function() {
  if ((size - 2) >= 12) {
    $( ".read" ).css( "font-size", "-=2" );
    $( "#font-size" ).text(  size -= 2  );
  }
});

function getSize() {
  size = $( ".read-d" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size" ).text(  size  );
}
getSize();
$( "#up" ).on( "click", function() {
  if ((size + 2) <= 72) {
    $( ".read-d" ).css( "font-size", "+=2" );
    $( "#font-size" ).text(  size += 2 );
  }
});

$( "#down" ).on( "click", function() {
  if ((size - 2) >= 12) {
    $( ".read-d" ).css( "font-size", "-=2" );
    $( "#font-size" ).text(  size -= 2  );
  }
});

function getSize() {
  size = $( ".read-z" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size" ).text(  size  );
}
getSize();
$( "#up" ).on( "click", function() {
  if ((size + 2) <= 72) {
    $( ".read-z" ).css( "font-size", "+=2" );
    $( "#font-size" ).text(  size += 2 );
  }
});

$( "#down" ).on( "click", function() {
  if ((size - 2) >= 12) {
    $( ".read-z" ).css( "font-size", "-=2" );
    $( "#font-size" ).text(  size -= 2  );
  }
});
