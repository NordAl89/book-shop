o2.gArrivels = 
{
 	blockName()
	{
		let title = document.querySelector('._g-arrivels__title2');
		if(title.textContent !== 'Новые поступления')
			{
				title.textContent = 'Новые поступления'
			}
	},

	changePrice()
	{		
		const price = document.querySelector('._article-arrivels__price')
		// console.log(price.textContent)
		if(price === null){
			return
		}

		if(window.innerWidth <= 768)
		{
			price.textContent = '4 450 ₽ '
		}else {
			price.textContent = '450 ₽'
		}

	}


	
}
o2.gArrivels.blockName()
o2.gArrivels.changePrice()
