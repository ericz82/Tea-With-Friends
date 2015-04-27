$(document).ready(function(){

	$("#tib").removeClass("tib-before");

	setTimeout(function() {
		$('#wf').removeClass("wf-before")
	}, 2500);

	setTimeout(function() {
		$('#invite').removeClass("invite-before")
	}, 5000);

	$('#settings').click(function() {
		$('#settings-box').toggle();
	});

	$("#invite").click(function() {
		$('#modal-container').show();
	});

	$("#modal-overlay").click(function() {
		$('#modal-container').hide();
	});

	$(".checked-box").click(function() {
		if ($(this).hasClass('show')) {
			$(this).removeClass('show');
			$(this).prev().addClass('show');
		} else {
			$(this).addClass('show');
			$(this).prev().removeClass('show');
		}
	});

});