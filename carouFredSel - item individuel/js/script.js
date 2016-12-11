$(function() {
	var itemHeight = 250;
	var delay = 150;

	$('#carousel').carouFredSel({
		items: 3,
		scroll:{
			duration: 1400,
			timeoutDuration: 2500,
			onBefore: function ( data ){
				
				data.items.old.each(function( i ){
					$(this).delay(i*delay).animate({
						marginTop: itemHeight,
						marginBottom: -itemHeight
					},500);
				});
				
				data.items.visible.css({
					marginTop: -itemHeight,
					marginBottom: itemHeight
				});
				
				data.items.visible.each(function( i ){
					$(this).delay((3+i)*delay).animate({
						marginTop: 0,
						marginBottom: 0
					},500);
				});
			}
		}
	});
});
