$(document).ready(function(){
	$('.scroll').click(function () {
		$("html, body").animate({
			scrollTop: $("form").offset().top + 100
		}, 2000);
		return false;
	});
	
	  $('[data-toggle="scroll"]').on("click", function (e) {
        var anchor = $(this).attr("data-id");
        var bodyLeft = $("body").css("left");
        if (bodyLeft == "200px") {
            $("body").animate({
                left: "-=200px"
            }, 500);
        }
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top
        }, 1000);
        e.preventDefault();
    });
});