var CasaTaller = {
	init: function (config) {
		var self = this;
		self.config = config;

		// resizes roof
		$( window ).resize(function() {self.resizeEvent();});
		self.resizeEvent();

		// mobile menu
		self.config.mobile_menu_event.click(function() {
			self.config.mobile_menu.slideToggle();
		});

		// nav
		self.config.container.sspiNavigable({
			beforeNavigate: this.preNavigate,
			afterNavigate: this.postNavigate
		});
	},

	resizeEvent: function () {
		var self = CasaTaller;
		var width = self.config.width_provider.width();

		self.config.roof.css('border-left-width', Math.floor(width/2));
		self.config.roof.css('border-right-width', Math.ceil(width/2));
	},

	preNavigate: function (event, promise, url) {
		var self = CasaTaller;
		self.config.container.slideUp('fast');
		promise.resolve();
	},
	postNavigate: function (event, url) {
		var self = CasaTaller;
		self.config.container.slideDown('normal');
		// Magnific Popup
		$('.taller-photos').magnificPopup({ delegate: 'a', type: 'image', gallery:{enabled:true} });
	}
};
