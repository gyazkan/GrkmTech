$(function () {
  $('select').niceSelect();

  $(".map-item").on("click", function () {
    $(".left-area").removeClass("col-12").addClass("col-lg-6");
    $(".right-area").removeClass("d-none");
    $(".see-other-solution-points-button-area").removeClass("d-none")
  });

  $(".solution-points-searc-button-body a").on("click",function() {
    let city = $(".solution-points-province-filter-area").find(".selected").attr("data-value");

    $(".solution-points-city-body-head").addClass("d-none");
    $(`.solution-points-city-body-head[data-value=${city}]`).removeClass("d-none");

    $(".see-other-solution-points-button-area").removeClass("d-none")
  });



  
})

$(document).on("click",".see-other-solution-points-button-area a", function() {
  $(".solution-points-city-body-head").removeClass("d-none");
    $(".left-area").addClass("col-12").removeClass("col-lg-6");
    $(this).parent().addClass("d-none");
    $(".right-area").addClass("d-none");
    $('select').val('0');
  $('select').niceSelect('update'); 
});

