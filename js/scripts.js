$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var name = $("input#nameInput").val();
    var end = $("#whichend").val();
    var flavor = $("input:radio[name=flavor]:checked").val();

    $(".nameInput").text(name);
    $(".end").text();
    $(".").text();
    $(".").show();

    event.preventDefault();

  });
});
