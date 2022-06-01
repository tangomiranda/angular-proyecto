// Global variables
var clientSize	= document.body.clientWidth;
var screenSize	= {'xs'	: { 'up' : 575.98, 'down' : 576 },
				   'sm'	: { 'up' : 767.98, 'down' : 768 },
				   'md'	: { 'up' : 991.98, 'down' : 992 },
				   'lg'	: { 'up' : 1199.98, 'down' : 1200 },
				   'xl'	: { 'up' : 1359.98, 'down' : 1366 }};
var mainVar		= {'color-corporate'		: '#00237d',
				   'color-corporate-alt'	: '#ff232a'};

// On resize
window.onresize = function() {
	clientSize = document.body.clientWidth;
	/*
	// Responsive check
	if(clientSize < screenSize.lg.up) {
		... less than ...
	}
	*/
};

// On load
window.onload = function() {
     /*
	// Responsive check
	if(clientSize > screenSize.lg.down) {
		... more than ...
	}
	*/
};

// On ready
window.addEventListener("DOMContentLoaded", function() { 
	// Tooltip
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	  return new bootstrap.Tooltip(tooltipTriggerEl, { trigger: 'hover'})
	});
});