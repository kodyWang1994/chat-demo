$(function() {
	$('#open-chat').click(function() {
		$("#chat-win").slideToggle("fast", function() {
            console.log("Animation Done.");
        });
	});

    $('#close-chat').click(function() {
        $("#chat-win").slideUp("fast");
    });
})