
var screenAnimationElements = {
	".screen-1" : [
		".screen-1__heading",
		".screen-1__subheading"
	],	
	".screen-2" : [
		".screen-2__wrap__heading",
		".screen-2__wrap__subheading",
		".screen-2__wrap__bgi-1",
		".screen-2__wrap__bgi-2"
	],
	".screen-3" : [
		".screen-3__wrap__content-heading",
		".screen-3__wrap__content-subheading",
		".screen-3__wrap__bg"
	]
}

// 设置当前屏的动画
function setScreenAnimation(screenCls) {
	var screen = document.querySelector(screenCls);  //获取当前屏元素
	var animationElements = screenAnimationElements[screenCls]; //获取当前屏的动画元素

	var isSetAnimationInit = false; //是否完成了动画元素的初始化？ 没有
	var isSetAnimationDone = false; //动画元素是否已经DONE了？ 没有
	screen.onclick = function () {
		//初始化样式，增加init
		if (isSetAnimationInit === false) {
			//将动画元素拿出来一一给他们添加init
			for (var i = 0; i < animationElements.length; i++) {
				var element = document.querySelector(animationElements[i]);
				var baseCls = element.getAttribute("class");
				element.setAttribute("class",baseCls + " " + animationElements[i].substr(1) + "_animation_init");
			}
			isSetAnimationInit = true;
			return;
		}
		//init 变done
		if (isSetAnimationDone === false) {
			for (var i = 0; i < animationElements.length; i++) {
				var element = document.querySelector(animationElements[i]);
				var baseCls = element.getAttribute("class");
				element.setAttribute("class",baseCls.replace('_animation_init','_animation_done'));
			}
			isSetAnimationDone = true;
			return;		 
		}
		// done 变init
		if (isSetAnimationDone === true) {
			for (var i = 0; i < animationElements.length; i++) {
				var element = document.querySelector(animationElements[i]);
				var baseCls = element.getAttribute("class");
				element.setAttribute("class",baseCls.replace('_animation_done','_animation_init'));
			}
			isSetAnimationDone = false;
			return;
		}
	}
}
for(k in screenAnimationElements){
	setScreenAnimation(k);
}