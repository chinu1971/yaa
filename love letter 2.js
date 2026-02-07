$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    openLetter();
  });

  btn_open.click(function () {
    openLetter();
  });

  btn_reset.click(function () {
    closeLetter();
  });

  function openLetter() {
    envelope.addClass("open").removeClass("close");

    setTimeout(function () {
      $(".feel-btn").fadeIn();
    }, 2500);
  }

  function closeLetter() {
    envelope.addClass("close").removeClass("open");
    $(".feel-btn").hide();
  }

  // Redirect on click
  $("#feelBtn").click(function () {
    window.location.href = "2.html";
  });
});

