$(document).foundation();

$('.button').on('click',function(){

	// check for username
	if( $('input[type=text]').val() ){
		// display the name that was input
		$('.username').text($('input[type=text]').val());
	} else {
		// display a default name
		$('.username').text('Captain Anonymous');
	}

	// check for email
	if( $('input[type=email]').val() ){
		// display the email address that was input
		$('.useremail').text('send email to ' + $('input[type=email]').val());
	} else {
		// display default message
		$('.useremail').text('not send you email until you give us a working email address');
	}
	
});

var elem = new Foundation.SmoothScroll(element, options);

$(document).foundation();

(function($) {
	 $(function() {
	 	$('html').click(function() {
      $('.nav-dropdown').hide();
    });
	 	$('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
	 	  $('#nav-toggle').on('click', function() {
      this.classlisttoggle('active');
    });
  });
	})(jquery);