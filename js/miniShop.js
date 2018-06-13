
function ajaxfun(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET','http://10.21.21.119/test/adlist.php',true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){	
			              getImg(xhr.responseText);
		}
	}
}

function getImg(data){
      var data = JSON.parse(data);
      console.log(data);
      var adlist = data.adlist;
      	 for(var i = 0; i <adlist.length; i++){
      	 	(function(i){
      	 		var href = adlist[i].img,
      	 		      url = adlist[i].url;
      	  		var  len  = $('.item img').length;
      	 		 for (var index = 0; index < len; index++){
      	 		 	if(index == i){
      	 		 		$('.item img').eq(index).attr('src',href);
                                  $('.item img').css({'height': '180px', 'width' : '100%'})
      	 		 		$('.item a').eq(index).attr('href',url);
      	 		 	}
      	 		 }
      	  	console.log(i)
      	 	})(i);
      	 }	     
   
}	

  $(function(){
     $("#myCarousel").carousel({
       interval : 2000
     }
     
      );
   });
  
   // $(document).ready(function(){
   //   $("#myCarousel").carousel(
   //    interval : 2000);
   // });

ajaxfun();

footDetail();
function footDetail(){
  $('.row div').click(function(){
             $('.active').removeClass('active');
             $(this).addClass('active');
             // $(this).children('a').attr('href','../html/goodsClassify.html');
             console.log($(this).index());
             if($(this).index() == 0){
                 $(this).children('li').children('a').attr('href','javascript:0;');
             }
             if($(this).index() == 1){
                 $(this).children('li').children('a').attr('href','../html/goodsClassify.html');
             }
             if($(this).index() == 2){
                 $(this).children('li').children('a').attr('href','http://www.baidu.com');
             }
     })
}






 
 

