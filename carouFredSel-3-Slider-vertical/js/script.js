$(function() {
	$('#carousel').carouFredSel({
		width: 900,
		height:'100%',
		direction: 'up',
		items: 1,
		scroll: {
			duration: 600,
			onBefore: function(data){
				data.items.visible.children().css('opacity',0).delay( 200 ).fadeTo(400,1);
				data.items.old.children().fadeTo(400,0);
			}
		}
	});
});
