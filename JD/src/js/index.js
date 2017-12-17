/*首页banner轮播 start*/
(function () {
  var sliderWrapper = $('#sliderWrapper');//banner的容器
    var sliderWrapperLi = sliderWrapper.find('li');/*轮播的li */
    var sliderNavLi =$('#sliderNav').find('li');/**轮播导航小圆点 */
     var sliderNavLiLength = sliderWrapperLi.length;/**轮播导航小圆点个数 */
    var arrowLeft = $('.slider-container').find('.arrow-left');/*左箭头按钮*/
    var arrowRight = $('.slider-container').find('.arrow-right');/*右箭头按钮*/
    slider(sliderWrapper,sliderWrapperLi,sliderNavLi,sliderNavLiLength,arrowLeft,arrowRight);
})();
/*首页banner轮播end*/

/*秒杀区块的轮播 start*/
(function () {
    var timebr = $('.time-b-r');//banner的容器
    var timebrLi = $('.time-slide').find('li');/*轮播的li */
    var timernavLi =$('.timer-nav').find('li');/**轮播导航小圆点 */
     var timebrLiLength = timebrLi.length;/**轮播导航小圆点个数 */
    setTimeout(function () {
      slider(timebr,timebrLi,timernavLi,timebrLiLength);
    },2000);
})();

/*秒杀区块的轮播 end*/

/*会买专辑区块的轮播 start*/
(function () {
    var timebr = $('.cacth-m-slide-ul');//banner的容器
    var timebrLi = $('.cacth-m-slide-ul').find('li');/*轮播的li */
    var timernavLi = $('.cacth-m-slide-nav').find('li');/**轮播导航小圆点 */
     var timebrLiLength = timebrLi.length;/**轮播导航小圆点个数 */
    setTimeout(function () {
      slider(timebr,timebrLi,timernavLi,timebrLiLength);
    },2000);
})();
/*会买专辑区块的轮播 end*/

// 觅Me区块的的轮播 start
(function () {
  var miMe = $('.mi-me');//banner的容器
    var mimeslide = $('.mi-me-slide').find('li');/*轮播的li */
    var mimenav =$('.mi-me-nav').find('li');/**轮播导航小圆点 */
     var mimeslideLiLength = mimeslide.length;/**轮播导航小圆点个数 */
    slider(miMe,mimeslide,mimenav,mimeslideLiLength);
})();
// 觅Me区块的的轮播 end

// 京东直播区块的轮播 start
(function () {
  var muhu = $('.muhu');//banner的容器
    var qualityslide = $('.quality-slide').find('li');/*轮播的li */
    var qualityslidenavLi =$('.quality-slide-nav').find('li');/**轮播导航小圆点 */
        var qualityslideLiLength = qualityslide.length;/**轮轮播导航小圆点个数 */
    var arrowLeft = $('.quality-video').find('.quality-arrow-left');/*左箭头按钮*/
    var arrowRight = $('.quality-video').find('.quality-arrow-right');/*右箭头按钮*/
    slider(muhu,qualityslide,qualityslidenavLi,qualityslideLiLength,arrowLeft,arrowRight);
})();
// 京东直播区块的轮播 end

/*首页登录区块的选项卡 start*/
(function () {
  var tab = $('.notice-nav').find('.notice-nav-li');/*tab标签*/
  var tabW = tab.width();/*tab的宽度*/
  var tabContent = $('.notice-content').find('ul');/*选项卡的内容*/
  var line = $('.notice-nav').find('.line');/*底下跟追移动的线*/
  var dataType = "navli";/*自定义属性的名字*/
  toggleTab(tab,tabW,tabContent,dataType,line);
})();
/*首页登录区块的选项卡 end*/

/*首页排行榜的选项卡 start*/
(function () {
  var tab = $('.catch-ph').find('li');/*tab标签*/
  var tabW = tab.width();/*tab的宽度*/
  var tabContent = $('.tab-content-wrapper').find('.tab-content-base');/*选项卡的内容*/
  var line = $('.notice-nav').find('.line');/*底下跟追移动的线*/
  var dataType = "catch";/*自定义属性的名字*/
  toggleTab(tab,tabW,tabContent,dataType,line);
})();
/*首页排行榜的选项卡 end*/


/*渐入渐出的轮播函数*/
/*@param说明
$sliderWrapper：轮播的的容器
$sliderWrapperLi：轮播的区块
$sliderNavLi：轮播导航小圆点
$sliderNavLiLength：轮播导航小圆点的个数
$leftBtn:左箭头按钮
$rightBtn：右箭头按钮
 */
function slider($sliderWrapper,$sliderWrapperLi,$sliderNavLi,$sliderNavLiLength,$leftBtn,$rightBtn) {
  var timer = null; //定时器
  var index = 0; //开始的索引

  // 点击导航圆点切换图片
  $sliderNavLi.click(function() {
   index = $(this).index();
   $sliderWrapperLi.eq(index).fadeIn().siblings('li').fadeOut();
   $sliderNavLi.eq(index).addClass('current').siblings('li').removeClass('current');
  });

  // 点击左按钮切换图片
  if ($leftBtn) {
    $leftBtn.click(function () {
      index--;
      index = index % $sliderNavLiLength;
      $sliderWrapperLi.eq(index).fadeIn().siblings('li').fadeOut();
      $sliderNavLi.eq(index).addClass('current').siblings('li').removeClass('current');
  });
  }
  // 点击右按钮切换图片
  if ($rightBtn) {
    $rightBtn.click(function () {
      index++;
      index =index % $sliderNavLiLength;
      $sliderWrapperLi.eq(index).fadeIn().siblings('li').fadeOut();
      $sliderNavLi.eq(index).addClass('current').siblings('li').removeClass('current');
  });
  }
  // 自动轮播函数
  function autoPlay() {
   index++;
   index = index % $sliderNavLiLength; //取余
   $sliderWrapperLi.eq(index).fadeIn().siblings('li').fadeOut();
   $sliderNavLi.eq(index).addClass('current').siblings('li').removeClass('current');
  }

  // 设置定时器
  timer = window.setInterval(autoPlay,3000);

  // 鼠标移上轮播的的容器清除定时器，离开启动
  $sliderWrapper.hover(function() {
    window.clearInterval(timer);
  }, function() {
    timer = setInterval(autoPlay,3000);
  });
  
}


/*
切换选项卡函数
@param：$tab:tab标签
        $tabW:tab的宽度
       $tabContent:tab的内容
       $line:tab下跟追移动的线
        $dataType:自定义属性的名字
 */
function toggleTab($tab,$tabW,$tabContent,$dataType,$line) {
    $tab.mouseenter(function() {
      $('.'+ $(this).data($dataType)).css('display','block').siblings().css('display','none');
    });
}



