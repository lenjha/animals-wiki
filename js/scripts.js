$(document).ready(function() {

  var pugClick = $("#pug-btn").click(function() {
    if (pugClick) {
      $("#pug-info").toggle();
      $("#shark-info").hide();
      $("#dragon-info").hide();
      $("#walrus-info").hide();
    }
  })

  var sharkClick = $("#shark-btn").click(function() {
    if (sharkClick) {
      $("#shark-info").toggle();
      $("#pug-info").hide();
      $("#dragon-info").hide();
      $("#walrus-info").hide();
    }
  })

  var dragonClick = $("#dragon-btn").click(function() {
    if (dragonClick) {
      $("#dragon-info").toggle();
      $("#pug-info").hide();
      $("#shark-info").hide();
      $("#walrus-info").hide();
    }
  })

  var walrusClick = $("#walrus-btn").click(function() {
    if (walrusClick) {
      $("#walrus-info").toggle();
      $("#pug-info").hide();
      $("#shark-info").hide();
      $("#dragon-info").hide();
    }
  })
});
