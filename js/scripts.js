$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".tooshort").hide();
    $(".short").hide();
    $(".medium").hide();
    $(".tall").hide();
    var heightValue = parseInt($("#height").val());
    if (heightValue === 1) {
      $(".tooshort").show();
    }
    else if (heightValue === 2) {
      $(".short").show();
    }
    else if (heightValue === 3) {
      $(".medium").show();
    }
    else if (heightValue === 4) {
      $(".tall").show();
    }

  })

});
