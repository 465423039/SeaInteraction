$('a[href="#"]').click(function() {
	return false;
})

$('body').scrollspy({
	target: '.navbar-custom'
})

let n = 0;
setInterval(function() {
	n++;
	if (n > 2) {
		n = 0;
	}
	$('.intro').css('background-image', `url(images/bg/0${n+1}.jpg)`);
	$('.flexslider .slides li').eq(n).addClass('active').siblings().removeClass('active');
}, 2500)

for (let i = 0; i < 26; i++) {
	let tag = $('.portfoliolist>div').eq(0).clone();
	let path;
	if (i < 8) {
		path = `images/portfolio0${i+2}.jpg`;
	} else if (i == 20) {
		path = `images/portfolio${i+2}.gif`;
	} else {
		path = `images/portfolio${i+2}.jpg`;
	}
	if (i == 23) {
		tag.removeClass('sort1').addClass('sort2');
	}
	tag.children().children('img').attr('src', path);
	$('.portfoliolist').append(tag);
}

$('.navbar-toggle').click(function() {
	$('.navbar-collapse').slideToggle(500);
})

$('.navbar-nav .page-scroll').click(function() {
	$(this).addClass('active').siblings().removeClass('active');
	let num;
	switch ($(this).index()) {
		case 0:
			num = 0;
			break;
		case 1:
			num = $('.team-content').offset().top;
			break;
		case 2:
			num = $('.services-content').offset().top;
			break;
		case 3:
			num = $('.portfolio-wrap').offset().top;
			break;
		case 4:
			num = $('.testimonial-wrap').offset().top;
			break;
		case 5:
			break;
		case 6:
			num = $('.contact-wrap').offset().top;
			break;
		default:
			num = 0;
			break;
	}
	$('html,body').animate({
		scrollTop: num
	}, 1000);
})

$('.portfolio-main .filters li').click(function() {
	if ($(this).hasClass('active')) {
		return;
	}
	$(this).addClass('active').siblings().removeClass('active');
	if ($(this).index() == 2) {
		$('.portfoliolist .sort1').addClass('flipInY');
		setTimeout(function() {
			$('.portfoliolist .sort1').hide().removeClass('flipInY');
		}, 1250);
	} else {
		$('.portfoliolist .sort1').show().addClass('flipInY');
		setTimeout(function() {
			$('.portfoliolist .sort1').removeClass('flipInY');
		}, 1250);
	}
})

$('.contact-info .qq_email a').hover(function() {
	$(this).css('color', '#1abc9c');
	$(this).children('.mail').css('background-position-y', '-28px');
}, function() {
	$(this).css('color', '#222');
	$(this).children('.mail').css('background-position-y', '0');
})

$(window).scroll(function() {

	let navOffTop = $('.navbar').offset().top;

	if (navOffTop >= 150) {
		$('.navbar').addClass('top-nav-collapse');
	} else {
		$('.navbar').removeClass('top-nav-collapse');
	}

	addAnimated($('.welcome-text'), 'bounceIn');

	for (let i = 0; i < $('.fact-info').length; i++) {
		addAnimated($('.fact-info').eq(i), 'fadeInRight');
	}

	for (let i = 0; i < $('.fade-text').length; i++) {
		addAnimated($('.fade-text').eq(i), 'fadeIn');
	}

	for (let i = 0; i < $('.staff-content').length; i++) {
		addAnimated($('.staff-content').eq(i), 'rollIn');
	}

	for (let i = 0; i < $('.service-content').length; i++) {
		addAnimated($('.service-content').eq(i), 'bounceIn', -180);
	}

	for (let i = 0; i < $('.portfoliolist>div').length; i++) {
		addAnimated($('.portfoliolist>div').eq(i), 'flipInY');
	}

	addAnimated($('.quote-slide'), 'fadeIn');

	for (let i = 0; i < $('.contact-info').length; i++) {
		addAnimated($('.contact-info').eq(i), 'flipInX');
	}

	changeImgY($('.facts-content'));
	changeImgY($('.services-content'));
	changeImgY($('.testimonial-wrap'));

})

function addAnimated(tag, className, offsetNumber = -80) {
	let offsetBottom = tag.offset().top - $(window).scrollTop() - $(window).height();
	if (!tag.hasClass(className) && offsetBottom < offsetNumber) {
		tag.addClass(className);
	} else if (tag.hasClass(className) && offsetBottom >= offsetNumber) {
		tag.removeClass(className);
	}
}

// function changeNav(tag, target) {
// 	let offsetTop = tag.offset().top - $(window).scrollTop();
// 	if(offsetTop < 20) {
// 		target.addClass('active').siblings().removeClass('active')
// 	}
// }

function changeImgY(tag) {
	let offsetTop = tag.offset().top - $(window).scrollTop();
	if (offsetTop < $(window).height()) {
		tag.css('background-position-y', -offsetTop);
	}
}
