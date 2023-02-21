$(function() {
    $(".selectable-button").on("click",function() {
        if($(this).attr("data-show-state") === "false") {
            $(this).attr("data-show-state","true");
            $(".hidden-filter-area").removeClass("disabled-area");
            $(".body-right-filter").removeClass("overflow-hidden");
        } else if ($(this).attr("data-show-state") === "true") {
            $(this).attr("data-show-state","false");
            $(".hidden-filter-area").addClass("disabled-area");
            $(".body-right-filter").addClass("overflow-hidden");
        }
    })

    $(".body-left-filter a").on("click",function() {
        $(".body-left-filter a").removeClass("body-left-active")
        $(this).addClass("body-left-active")
    })
})
