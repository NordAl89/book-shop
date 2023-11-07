o2.gAccordion =
{
	openClose(button)
	{
		const accordList = document.querySelectorAll('._accordion__list');
		const accordBtnImg = document.querySelectorAll('._accordion__btn-img');
		let rightList = button.nextElementSibling

			accordList.forEach(item => {
				if(item === rightList){
					item.classList.toggle('accordion__list--hidden')
				}else{
					item.classList.add('accordion__list--hidden')
				}
				
			});		
	}
}