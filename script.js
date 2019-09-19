
var myWrapper = document.getElementById("wrapper")
 ;


	
	for (var i = 0; i < 150; i++) {
		myWrapper.innerHTML +=
		 '<div class="patternUnit" style="background-color: rgb('+ (300 - (i*14)) +',' + (i*3) + ',0); transform: rotate('+ (2 + i) +'deg);"></div>';

	}



/******************/
/*****FOR LOOP w/ TEMPLATE LITERAL *******/
	var changingColor = 100;

	for (var i = 0; i < 100; i++) {

		changingColor = changingColor + 100;
    
    

		var degrees;

		if(i % 2 === 0){
			// even
			degrees = (i/100) * 360;
			console.log("i: " + i, degrees)
		}else{
			// odd
			degrees = ((i-1)/100) * 360;
			console.log("i: " + i, degrees)
		}

		var myModule = `

		<div 
			class="module" 
			style="background-color:rgb(${changingColor},0,0);"
		>
			<div 
				class="module_child" 
				style="transform: rotate(${degrees}deg); background-color: rgb(255,0,${changingColor});"
			>${i}</div>
		</div>
		`;


		var infiniteRotate = 45 + ((i/100) * 80);



		var mySecondModule = `
			<div class="infinite_wrapper">

				<div class="infinite-five" style="transform: rotate(${infiniteRotate}deg);"></div>

			</div>
		`;

		myWrapper.insertAdjacentHTML('afterend' , mySecondModule);

		if(i % 2 === 0){
			myWrapper.insertAdjacentHTML('beforeend' , myModule);
		}else{
			myWrapper.insertAdjacentHTML('afterbegin' , myModule);
		}

	}










