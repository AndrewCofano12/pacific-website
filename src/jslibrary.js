


export function handleColorOnSliderChange(currentIndex) {
    var colors = ["#8d9692","#C9C2BB", "#C8C9BB"];
    const BackgroundElement = document.querySelector('.musicBackground')
    BackgroundElement.style.cssText = "background-color: " + colors[currentIndex];
	// if (currentIndex == undefined || currentIndex >= colors.length) {
	// 	currentIndex = 0;
	// }
  }
  
let myVar = 1234;
