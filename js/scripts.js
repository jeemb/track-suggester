$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var name = $("input#nameInput").val();
    var whichend = $("#whichend").val();
    var interaction = $("#interaction").val();
    var endproduct = $("#endproduct").val();
    var design = $("#design").val();
    var work = $("#work").val();

    if (whichend === "Front-end" || design === "Design of Webpage") {
      $(".language").text("CSS/Design");
    } else if (interaction === "little" || endproduct === "Webpages" || work === "Agency") {
      $(".language").text("PHP/Drupal");
    } else {
      $(".language").text("Java/Android");
    }

    $(".nameInput").text(name);
    $("#output").show();

    event.preventDefault();
  });
});
