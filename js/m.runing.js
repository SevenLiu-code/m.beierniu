$(function(){
	//首页轮播
	var homeSlide = new Swiper ('.swiper-home-slide', {
	    loop: true,
	    autoplay: 5000,
	    pagination: '.swiper-pagination'
  }) 
	//车辆展示三栏触碰切换
	var homeCar_show = new Swiper ('.swiper-car-show', {
	    loop: true,
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    paginationBulletRender: function (swiper, index, className) {
	    	switch(index ){
	    		case 0: return '<li class="' + className + '"><a href="javascript:;">' + '最新上架' + '</a></li>'
	    				break;
	    		case 1: return '<li class="' + className + '"><a href="javascript:;">' + '准新车' + '</a></li>'
	    				break;
	    		case 2: return '<li class="' + className + '"><a href="javascript:;">' + '降价急售' + '</a></li>'
	    				break;		
	    	}
      		
  		}
  })
  //车辆详情页图片轮播
 	var car_details_swiper = new Swiper('.car-details-swiper', {
 		loop: true,
		pagination: '.swiper-pagination',
		paginationType: 'fraction',
		paginationFractionRender: function (swiper, currentClassName, totalClassName) {
	      return '<span class="_img_count_bg"></span><span class="' + currentClassName + '"></span>' +
	             '&nbsp;/&nbsp;' +
	             '<span class="' + totalClassName + '"></span>';
  		}
 	})
	//图片详情轮播
	var carImg_swiper = new Swiper('.carImg-detail-swiper', {
		loop: true,
		pagination: '.swiper-pagination',
		paginationType : 'fraction',
		paginationFractionRender: function (swiper, currentClassName, totalClassName) {
	      return '<span class="' + currentClassName + '"></span>' +
	             ' / ' +
	             '<span class="' + totalClassName + '"></span>';
  		}
	});

	//二手车问答页轮播
	var swiper_ask_kind = new Swiper('.swiper-ask-kind', {
		loop: true,
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    paginationBulletRender: function (swiper, index, className) {
	    	switch(index ){
	    		case 0: return '<li class="' + className + '"><a href="javascript:;">' + '买车卖车' + '</a></li>'
	    				break;
	    		case 1: return '<li class="' + className + '"><a href="javascript:;">' + '交易过户' + '</a></li>'
	    				break;
	    		case 2: return '<li class="' + className + '"><a href="javascript:;">' + '保养维修' + '</a></li>'
	    				break;
	    		case 3: return '<li class="' + className + '"><a href="javascript:;">' + '金融贷款' + '</a></li>'
	    				break;		
	    	}
      		
  		}
	});
})

