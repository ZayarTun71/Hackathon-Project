import jQuery from 'jquery'

const $ = jQuery;
window.jQuery = jQuery;

jQuery.extend(jQuery.easing, {
	def: 'easeOutQuad',
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	},
	easeOutExpo: function (e, f, a, h, g) {
		return f === g ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a;
	},
	quart: function (x, t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	}
});

// win8.1 ie11 mousewheel scroll bug
if (navigator.userAgent.match(/Trident\/7\./)) {
	$('body').on('mousewheel', function () {
		event.preventDefault();
		var wheelDelta = event.wheelDelta;
		var currentScrollPosition = window.pageYOffset;
		window.scrollTo(0, currentScrollPosition - wheelDelta);
	});
}

$(window).on({
  load: function () {
    // footerScr();
  },
  resize: function () {
    // footerScr();
  },
  scroll: function () {
    // footerScr();
  }
});

$('a[href^="#"]').click(function (e) {
	e.preventDefault();
});