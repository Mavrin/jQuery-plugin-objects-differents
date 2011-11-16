/**
 * jquery-objectdiff  - a jQuery plugin
 *
 * version 1.0
 * Licensed under the MIT License
 * Authors: Krivlenia Konstantin
 *          krivlenia@gmail.com
 *
 * This plugin is just a helper function for calculating a diff of two similar
 * objects ala ActiveRecord's changes hash. Just pass in two objects and this
 * function will return an object of changes that contains only the properties
 * that have changed.
 *
 * Usage:
 *
 *	var before = {id:123, name:{first:"Johnny", last:"Johnson"}};
 *	var after = {id:123, name:{first:"John", last:"Johnson"}, age:30};
 *	var changes = $.objectDiff(before, after);
 *
 * Result (contents of changes):
 *
 *	{name: {first:"John"}, age:30}
 *
 */
(function($) {
	$.objectDiff = function(a, b, c) {
		c = {} || c;
		$.each([a, b], function(index, obj) {

			for (prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					if (typeof obj[prop] === "object") {
						c[prop] = $.objectDiff(a[prop], b[prop], c);
					}
					else {
						
						if (a[prop] != b[prop]) {
							c[prop] = b[prop];
						}
					}
				}
			}
		});
		return c;

	}
})(jQuery);

