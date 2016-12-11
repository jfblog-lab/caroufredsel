$(function() {
	$('#tabs').carouFredSel({
		circular: false,
		items:1,
		width:'100%',
		auto: false,
		pagination:{
			container: '#pager',
			anchorBuilder: function (nr){
				return '<a href="#">'+$(this).find("h3").text()+'</a>';
			}
		}
	});
});
