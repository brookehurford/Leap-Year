var leapYear = function(year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 ===0) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    if (isNaN(year)) {
      $("#error").show()
      $("#result").hide();
    }
    else if (!result) {
      $("#result").show();
      $(".not").text("not");
    }
    else {
      $("#result").show();
      $(".not").text("");
    }

    event.preventDefault();
  });
});
