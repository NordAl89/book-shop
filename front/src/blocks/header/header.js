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
