$(document).ready(function() {

	$('.header__menu ul').clone().appendTo('.mmenu-nav');

	var $menu = $('.mmenu-nav').mmenu({
		navbar: {
			title: 'Меню'
		},
		extensions: [
		'fx-menu-slide',
		'fx-listitems-slide',
		'border-full',
		'pagedim-black'

		],
		offCanvas: {
			'position': 'right'
		},
		counters: true
	});

	var $icon = $('.js-navtrigger');
	var API = $menu.data( 'mmenu' );

	$icon.on( 'click', function() {
		API.open();
	});

	API.bind( 'open:start', function( $panel ) {
		$('.js-navtrigger').toggleClass('-active');
	});

	API.bind( 'close:start', function( $panel ) {
		$('.js-navtrigger').toggleClass('-active');
	});

	if (Modernizr.mq('(max-width: 767px)')) {
		var myMap, myPlacemark;

		ymaps.ready(init);
		function init(data) {
			$('#map').html('');
			myMap = new ymaps.Map('map', {
				controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
				center: [55.728778, 37.610988],
				behaviors: ['drag'],
				zoom: 17
			});

			if (!data.type) {
				myPlacemark = new ymaps.Placemark([55.728778, 37.610988], {
					balloonContentHeader: 'Союз скульпторов',
					balloonContentBody: 'г. Москва, Ленинский проспект, дом 2'
				});
				myMap.geoObjects.add(myPlacemark);
				return true;
			};
		};
	} else {
		var myMap, myPlacemark;

		ymaps.ready(init);
		function init(data) {
			$('#map').html('');
			myMap = new ymaps.Map('map', {
				controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
				center: [55.728779,37.610987],
				behaviors: ['drag'],
				zoom: 17
			});

			if (!data.type) {
				myPlacemark = new ymaps.Placemark([55.728779,37.610987], {
					balloonContentHeader: 'Союз скульпторов',
					balloonContentBody: 'г. Москва, Ленинский проспект, дом 2'
				});
				myMap.geoObjects.add(myPlacemark);
				return true;
			};
		};
	}

});
