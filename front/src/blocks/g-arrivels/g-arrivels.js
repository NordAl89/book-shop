o2.gArrivels = {
	blockName() {
		let title = document.querySelector("._g-arrivels__title2");
		if (title.textContent !== "Новые поступления") {
			title.textContent = "Новые поступления";
		}
	},

	changePrice() {
		const price = document.querySelectorAll('._article-arrivels__price');
		if (price.length === 0) {
		  return; 
		}
	
		function updatePrice() {
		  if (window.innerWidth <= 768) {
			price.forEach(function (item) {
			  item.textContent = '4 450 ₽';
			});
		  } else {
			price.forEach(function (item) {
			  item.textContent = '450 ₽';
			});
		  }
		}
	
		// Call the function initially
		updatePrice();
	
		// Add an event listener to update the price on window resize
		window.addEventListener('resize', updatePrice);
	  },
};
o2.gArrivels.blockName();
o2.gArrivels.changePrice();
