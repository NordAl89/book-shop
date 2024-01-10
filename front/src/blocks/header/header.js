o2.header = {
	setPlaceholder() {
	  const inputElement = document.querySelector('._inputHeader');
	  if (window.innerWidth > 768) {
		inputElement.placeholder = 'Автор, название, ISBN';
	  } else if (window.innerWidth <= 768) {
		inputElement.placeholder = 'Что будем искать?';
	  }
	},

	init() {
	  this.setPlaceholder(); // Set the initial placeholder value

	  // Add an event listener for window resize
	  window.addEventListener('resize', () => {
		this.setPlaceholder(); // Update the placeholder value on window resize
	  });
	}
  };

  // Initialize the header functionality
  // o2.header.init();

o2.form2 = {
  submit(e) {
e.preventDefault()
    let params = {
      url: process.env.APP_URL + 'requests/request.json',
      method: 'GET',
      dataType: 'json',
      success: (msg, instance) => {
        console.log(msg, instance);
      }
    };

    // Pass the form element to O2Validator.handleSubmit
    O2Validator.handleSubmit(e.target, params, true, true, this.callbacks);
  },
  callbacks: {
    test(field) {
      let $input = field.find('input');

      if ($input.val() === 'test') return true;

      O2Validator.setMessage(field, 'Test');
      return false;
    }
  },
};
