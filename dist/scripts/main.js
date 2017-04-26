'use strict';

$(document).ready(function () {

	$('#scene').parallax();

	$('.header__menu ul').clone().appendTo('.mmenu-nav');

	var $menu = $('.mmenu-nav').mmenu({
		navbar: {
			title: '<img src=\'images/logo.png\' alt=\'\' />'
		},
		extensions: ['fx-menu-slide', 'fx-listitems-slide', 'border-full', 'pagedim-black'],
		offCanvas: {
			'position': 'right'
		},
		counters: true
	});

	var $icon = $('.js-navtrigger');
	var API = $menu.data('mmenu');

	$icon.on('click', function () {
		API.open();
	});

	API.bind('open:start', function ($panel) {
		$('.js-navtrigger').toggleClass('-active');
	});

	API.bind('close:start', function ($panel) {
		$('.js-navtrigger').toggleClass('-active');
	});
});
//# sourceMappingURL=main.js.map
