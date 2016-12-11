$(function() {
	$('#carousel').carouFredSel({
		direction: 'down',
		width: 500,
		height: 500,
		align: false,
		padding: [0,0,350,0],
		items:{
			width: 500,
			height: 30,
			visible: 5,
			minimum: 1
		},
		scroll:{
			items: 1,
			duration: 1000,
			onBefore:function(data){
				$('span',this).removeClass('selected');
				data.items.visible.last().find('span').addClass('selected');
			}
		}
	});
	
	$('#carousel').children().click(function(){
		$('#carousel').trigger('slideTo',[this,-4,'prev']);
	});
});
