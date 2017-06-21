	//搜索检测是否为空
	function formCheck(){
		var $form = $('.h_search_form');
		var val = $form.find('input').val();
		if (val == '' || val.length == 0) {
			return false;
		}else { 
			return true;
		}
	}
	// 滚动条阻止冒泡
	$.fn.preventScroll = function(){  
	       $(this).each(function(){  
	            var _this = this;  
	            if(navigator.userAgent.indexOf('Firefox') >= 0){   //firefox  
	                _this.addEventListener('DOMMouseScroll',function(e){  
	                    _this.scrollTop += e.detail > 0 ? 60 : -60;     
	                    e.preventDefault();  
	                },false);   
	            }else{  
	                _this.onmousewheel = function(e){     
	                    e = e || window.event;     
	                    _this.scrollTop += e.wheelDelta > 0 ? -60 : 60;     
	                    return false;  
	                };  
	            }  
	        })    
	    };  
	