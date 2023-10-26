o2.gArrivels = 
{
 	blockName()
	{
		let title = document.querySelector('._g-arrivels__title2');
		if(title.textContent !== 'Новые поступления')
			{
				title.textContent = 'Новые поступления'
			}
	}
	
}
o2.gArrivels.blockName()
