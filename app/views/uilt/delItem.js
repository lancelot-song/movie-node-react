$(function(){
	$(".del").click(function(){
		var id = $(this).attr("data-id"),
			tr = $(this).parents("tr");

		$.ajax({
			type : "DELETE",
			url : "/admin/movie/del",
			data : { id : id }
		})
		.done(function(data){
			if(data.status === 1){
				if(tr.length > 0){
					tr.remove();
				}
			}
		})
	})
})