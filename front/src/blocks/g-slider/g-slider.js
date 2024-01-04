o2.gSlider = {
  sliderStep: 0,
  imageNumber: 0,
  //i will translateX this imgBoard
  imgBoard: document.querySelector("._g-slider__board"),

  imgWidthCulculater(){

	//i need image dinamic with to set my slider step
	let image = document.querySelector("._g-slider__image");
	let imageStyle = window.getComputedStyle(image);
	//our sliderStep will be equal to imageWidth;
	let imageWidth = parseFloat(imageStyle.width);
	return imageWidth;
  },

  next(){

	let imageWidth = this.imgWidthCulculater();
console.log(this.sliderStep)

	if (this.imageNumber < 3){
		this.imageNumber += 1;

		this.sliderStep = -imageWidth*this.imageNumber;
	}else {
		this.imageNumber = 0;
		this.sliderStep = 0;
	}
	this.imgBoard.style.transform = `translateX(${this.sliderStep}px)`;
  },

  prev(){

	let imageWidth = this.imgWidthCulculater();

	if (this.imageNumber > 0){
		this.imageNumber -= 1;
		this.sliderStep = -imageWidth*this.imageNumber;
	}else {
		this.imageNumber = 3;
		this.sliderStep = -imageWidth*3;
	}
	this.imgBoard.style.transform = `translateX(${this.sliderStep}px)`;
  },


  detector(event){
	let imageWidth = this.imgWidthCulculater();
	let imageNum = +event.dataset.num;
	this.sliderStep = -imageWidth*imageNum;
	this.imageNumber = imageNum;
	this.imgBoard.style.transform = `translateX(${this.sliderStep}px)`;
  },
};
