$(document).ready(function() {
	$(window).scroll(function() {
		if (this.scrollY > 20) {
			$('.navbar').addClass('sticky');
			$('.goTop').fadeIn();
			let statusElm = $('#statusZone');
			statusElm.empty();
			let statusElm2 = $('#book-status');
			statusElm2.empty();
		} else {
			$('.navbar').removeClass('sticky');
			$('.goTop').fadeOut();
		}
	});

	$('.goTop').click(function() {
		scroll(0, 0);
	});

	$('.menu-toggler').click(function() {
		$(this).toggleClass('active');
		$('.navbar-menu').toggleClass('active');
	});

	$('.works').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: { enabled: true }
	});
});

const contactValidation = () => {
	let name = document.getElementById('nameZone').value;
	let subject = document.getElementById('subjectZone').value;
	let email = document.getElementById('emailZone').value;
	let message = document.getElementById('messageZone').value;
	let error_message = document.getElementById('statusZone');

	let text;

	if (name.length < 5) {
		text = 'Please Enter valid Name';
		error_message.innerHTML = text;
		return false;
	}
	if (email.indexOf('@') == -1 || email.length < 6) {
		text = 'Please Enter valid Email';
		error_message.innerHTML = text;
		return false;
	}
	if (subject.length < 5) {
		text = 'Please Enter Correct Subject';
		error_message.innerHTML = text;
		return false;
	}
	if (message.length < 20) {
		text = 'Please Enter Atleast 20 Characters';
		error_message.innerHTML = text;
		return false;
	}
	alert('Form Submitted Successfully!');
	return true;
};

const bookingValidation = () => {
	let name = document.getElementById('book-name').value;
	let email = document.getElementById('book-email').value;
	let mobile = document.getElementById('book-mobile').value;
	let journey = document.getElementById('book-journey').value;
	let date = document.getElementById('book-date').value;
	let error_message = document.getElementById('book-status');

	let text;

	if (name.length < 5) {
		text = 'Please Enter valid Name';
		error_message.innerHTML = text;
		return false;
	}
	if (email.indexOf('@') == -1 || email.length < 6) {
		text = 'Please Enter valid Email';
		error_message.innerHTML = text;
		return false;
	}
	if (isNaN(mobile) || mobile.length < 10) {
		text = 'Please Enter valid Phone Number';
		error_message.innerHTML = text;
		return false;
	}
	if (journey === 'null') {
		text = 'Please Select a Destination';
		error_message.innerHTML = text;
		return false;
	}
	if (date === '') {
		text = 'Please Select a Date';
		error_message.innerHTML = text;
		return false;
	}
	alert('Form Submitted Successfully!');
	return true;
};
