o2.gSlider = {
  sliderStep: 0,
  imageNumber: 0,
  //i will translateX this imgBoard
  imgBoard: document.querySelector("._g-slider__board"),
  deterctors: document.querySelector("._g-slider__detectors"),

  imgWidthCulculater(){

		//i need image dinamic with to set my slider step
		let image = document.querySelector("._g-slider__image");
		let imageStyle = window.getComputedStyle(image);
		//our sliderStep will be equal to imageWidth;
		let imageWidth = parseFloat(imageStyle.width);
		return imageWidth;
  },

  detectorHighlight(){

  	let detectorsAll = this.deterctors.children;
			for(let elem of detectorsAll){
	  		if(elem.dataset.num == this.imageNumber){
	  			elem.style.backgroundColor = "#fff"
	  		}else{
	  			elem.style.backgroundColor = "rgba(255, 255, 255, .5)"
	  		}
	  	}
  },

  init(){
  	this.detectorHighlight()
  },

  next(){

		let imageWidth = this.imgWidthCulculater();

		if (this.imageNumber < 3){
			this.imageNumber += 1;
			this.sliderStep = -imageWidth*this.imageNumber;
		}else {
			this.imgBoard.style.transition = "transform 0s ease-in-out"
			this.imageNumber = 0;
			this.sliderStep = 0;

		}

		this.imgBoard.style.transform = `translateX(${this.sliderStep}px)`;
			// Re-enable transition after a short delay, chat Gpt
		 let setTimeoutId = setTimeout(() => {
        this.imgBoard.style.transition = "transform .7s ease-in-out";
    },0);

			this.detectorHighlight();

  },

  prev(){

		let imageWidth = this.imgWidthCulculater();

		if (this.imageNumber > 0){
			this.imageNumber -= 1;
			this.sliderStep = -imageWidth*this.imageNumber;
		}else {
			this.imgBoard.style.transition = "transform 0s ease-in-out";
			this.imageNumber = 3;
			this.sliderStep = -imageWidth*3;
		}
		this.imgBoard.style.transform = `translateX(${this.sliderStep}px)`;

		let setTimeoutId = setTimeout(() => {
        this.imgBoard.style.transition = "transform .7s ease-in-out";
    },0);
		this.detectorHighlight()
  },


  detector(event){
		let imageWidth = this.imgWidthCulculater();
		let imageNum = +event.dataset.num;
		this.sliderStep = -imageWidth*imageNum;
		this.imageNumber = imageNum;
		this.imgBoard.style.transform = `translateX(${this.sliderStep}px)`;

		if(this.imageNumber == 0 || this.imageNumber == 3){
			this.imgBoard.style.transition = "transform 0s ease-in-out";
		}

		let setTimeoutId = setTimeout(() => {
        this.imgBoard.style.transition = "transform .7s ease-in-out";
    },0);
	  this.detectorHighlight()
  },

};

document.addEventListener('DOMContentLoaded', () => {
  o2.gSlider.init();
});