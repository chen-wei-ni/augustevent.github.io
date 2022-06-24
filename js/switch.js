/*語言切換選單*/
$('.switch-list').hide()
$('.language-pack').click(function(e){
    e.stopPropagation();
    $('.switch-list').toggle(300, 'linear')
})
$("body").click(function(){
    $('.switch-list').hide()
})
$('.switch-list').click(function(e){
    e.stopPropagation();
})

/*語言圖示hover變色*/
$('.language-pack').hover(function(){
	$('.switch-icon').attr("src","images/language/icon_language_hover.svg");
},
function(){
	$('.switch-icon').attr("src","images/language/icon_language.svg");

});

/*滑動至最上方*/
$('.top_btn').hide();
		$(window).scroll(function() {
			var sh = $(window).scrollTop();
			
			if(sh > 300) {
				$('.top_btn').show(500, 'swing');
			}else {
				$('.top_btn').hide(500, 'swing');
			}
		});
		
		$('.top_btn').click(function() {
			$('html,body').animate({
				scrollTop : 0 //到最上面  
			}, 500);
		return false;
		});

/*獎金跳動動畫每2.5秒一次*/
const animate = document.querySelector('.award');
animate.classList.add('fuyofuyo');
animate.addEventListener('animationend', () => {
animate.classList.remove('fuyofuyo');  
setTimeout(function(){
animate.classList.add('fuyofuyo');
},2500)
})

/*標題跳動動畫每2.5秒一次*/
/*const animateTitle = document.querySelector('.bnTitle');
animateTitle.classList.add('effect');
animateTitle.addEventListener('animationend', () => {
animateTitle.classList.remove('effect');  
setTimeout(function(){
animateTitle.classList.add('effect');
},3000)
})*/

var scaleItem = document.querySelector('.bnTitle');
anime({
	targets: scaleItem,	
	keyframes: [
		{translateY: '-800'},
		{perspective: 800},
		{rotateX: 720},
		{translateY: 0},		
		{rotateX: 0},	
	  ],
	scale: [0,1],	
	duration: 800,
	easing: 'spring(1, 80, 10, 0)',
	delay: 400,
	complete: function () {
        animationDone = true;
		animateAdd();
    }   
  });

function animateAdd(){
	scaleItem.classList.add('effect');
	scaleItem.addEventListener('animationend', ()=>{
		scaleItem.classList.remove('effect');
		setTimeout(function(){
			scaleItem.classList.add('effect');
		},3000)
	})
} 

// var ribbonS = document.querySelector('.ribbon');
// anime({
// 	targets: ribbonS,
// 	scale: [
// 		{value: 1.15, easing: 'easeOutSine', duration: 50},
// 		{value: 1, easing: 'easeInOutQuad', duration: 80}
// 	  ],
// 	  scaleY: [
// 		{value: 1.1, easing: 'easeOutSine', duration: 50},
// 		{value: 0.9, easing: 'easeInOutQuad', duration: 100}
// 	  ],
// 	// scale: {
// 	// 		value: 1.1,
// 	// 		duration: 1600,
// 	// 		easing: 'easeInOutQuart',
// 	// 		delay: 100		
// 	// },	
// 	loop: true,
// 	delay: 800,
// 	direction: 'alternate'
// });

// setTimeout(function(){
// 	ribbonS.classList.remove('ribbonStart');
// },2800)

/*mouseMove*/
// var bodyWidth = screen.width;
// var mouse = document.querySelector('.mouseMove');
// var el = document.body
// function mouseMove(e){
// 	mouse.style.left = e.clientX +'px';
// 	mouse.style.top = e.clientY + 'px';
// }
// function mouseOpacity(e){
// 	mouse.style.opacity = 0;
// }

// if(bodyWidth > 768){
// 	el.addEventListener('mousemove',mouseMove);
// }else{
// 	el.addEventListener('mousemove',mouseOpacity);
// };
