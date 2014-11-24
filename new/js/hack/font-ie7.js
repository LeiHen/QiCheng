/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon_media_play': '&#xe600;',
		'icon_media_play_outline': '&#xe601;',
		'icon_arrows_left': '&#xe602;',
		'icon_arrows_right': '&#xe603;',
		'icon_arrows_top': '&#xe604;',
		'icon_arrows_bottom': '&#xe605;',
		'icon_number1': '&#xe606;',
		'icon_number2': '&#xe607;',
		'icon_number3': '&#xe608;',
		'icon_number4': '&#xe609;',
		'icon_number5': '&#xe60a;',
		'icon_number6': '&#xe60b;',
		'icon_number7': '&#xe60c;',
		'icon_number8': '&#xe60d;',
		'icon_number9': '&#xe60e;',
		'icon_number0': '&#xe60f;',
		'icon_number1_pad': '&#xe610;',
		'icon_number2_pad': '&#xe611;',
		'icon_number3_pad': '&#xe612;',
		'icon_number4_pad': '&#xe613;',
		'icon_number5_pad': '&#xe614;',
		'icon_number6_pad': '&#xe615;',
		'icon_number7_pad': '&#xe616;',
		'icon_number8_pad': '&#xe617;',
		'icon_number9_pad': '&#xe618;',
		'icon_number0_pad': '&#xe619;',
		'icon_yes': '&#xe61a;',
		'icon_false': '&#xe61b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon_[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
