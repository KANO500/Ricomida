$(document).ready(function () {
    $("a").click(function () {
        var gato = this.hash

        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top-70
            },
            400
        )
    })
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});