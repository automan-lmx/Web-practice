// 商品详情
$(document).ready(function(){
	$.ajax({
		type : "GET",
		typedata : "php",
		url : "http://10.21.21.119/test/goodslist.php",
		success : function(data){
		       var goodsData  = JSON.parse(data);
		             data =  goodsData.goodslist;
		       var len = data.length;
		       // console.log(data.length);
		        return addGoods(data);
			// 添加商品到购物车的点击事件
			// var p = document.getElementsByClassName("addBox");
			// for (var i = 0; i < p.length; i++) {
			// 	(function(arg){
			// 		var good = goodslist[i];
			// 		p[arg].onclick = function() {
			// 			addShopping(good.goods, good.descr, good.price, good.img);
			// 		};
			// 	})(i);	
			// 	}
			 // console.log (data[1].img)
		      }
	})
});

function addGoods(data){
	console.log(data)

	$.each(data,function(index,obj){
		$(".wrapper").append('<div class = "goodLists col-xs-6 col-md-6 col-sm-6">' +
					'<div class = "photo">' +
						  "<img src='"+obj['img']+"'>" +
					'</div>'  +
						'<div class = "goods">' +
							"<span class = 'goodsName'>" +obj['goods']+'</span>' +			
						'</div>' +
						'<div class = "addBox">' +
						"<span class = 'goodsPrice'>" +obj['price']+'</span>' +
						"<span class = 'glyphicon glyphicon-plus-sign'></span>" +
						'</div>' +
					'</div>');
		// $(".wrapper").append('<div class = "goodLists col-xs-6 col-md-6 col-sm-6">' );
		
	});
}


