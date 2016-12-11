$(function() {
	var _scroll = {
		delay: 1000,
		easing: 'linear',
		items: 1,
		duration: 0.07,
		timeoutDuration: 0,
		pauseOnHover: 'immediate'
	};
	
	$('#ticker-1').carouFredSel({
		width: 1000,
		align: false,
		items: {
			width: 'variable',
			height: 35,
			visible: 1
		},
		scroll: _scroll
	});
	
	
	$('#ticker-2').carouFredSel({
		width: 1000,
		align: false,
		circular: false,
		items: {
			width: 'variable',
			height: 35,
			visible: 2
		},
		scroll: _scroll
	});

	//	carrousel prenant 100% de la largeur du navigateur
	$('.caroufredsel_wrapper').css('width', '100%');

	//	mettre une grande largeur sur la dernière DD pour que le ticker n'affiche pas le premier point à la fin.
	$('#ticker-2 dd:last').width(2000);
});
