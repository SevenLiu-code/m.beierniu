$(function(){
	//首页轮播
	var homeSlide = new Swiper ('.swiper-container', {
	    loop: true,
	    autoplay: 5000,
	    // 如果需要分页器
	    pagination: '.swiper-pagination'
  }) 
	//车辆展示三栏触碰切换
	var homeCar_show = new Swiper ('.swiper-car-show', {
	    loop: true,
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    // 如果需要分页器
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
})

