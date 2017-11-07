$(function(){
	$(document).scroll(function(){
		for(var i=0;i<$('.urgent_item').length;i++){
			var offsetT=$('.urgent_item').eq(i).offset().top;
			if($(document).scrollTop() + $(window).height()>offsetT+$('.urgent_item').eq(i).height()){
				 
	            $('.urgent_item').eq(i).children('.item_right').addClass('animated fadeIn')
            	if(i%2==0){
            		$('.urgent_item').eq(i).children('.item_left').addClass('animated fadeIn');
            	}else{
            		 $('.urgent_item').eq(i).children('.item_left').addClass('animated fadeIn');
            	}	           
	        }
    	}

    	var offsetList=$('.chat_list').offset().top;
    	if($(document).scrollTop() + $(window).height()>offsetList+$('.chat_list').height()){
    		$('.chat_list').addClass('animated bounceInLeft');
    	}
	})
	
	 
})