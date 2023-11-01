$("#gallery-thumb1").click(function() {
    // TODO: snippet(s) to respond to the click event.
    console.log("button 1 clicked");
  $("#gallery-figure1").removeClass("hidden");
  $("#gallery-figure2").addClass("hidden");
  $("#gallery-figure3").addClass("hidden");
});

$("#gallery-thumb2").click(function() {
    // TODO: snippet(s) to respond to the click event.
  $("#gallery-figure1").addClass("hidden");
  $("#gallery-figure2").removeClass("hidden");
  $("#gallery-figure3").addClass("hidden");
});
