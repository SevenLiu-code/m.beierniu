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
	
  
	