'use strict'

console.log('script running');

const characters = {
	lcLettersArray: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ],
	ucLettersArray: [],
	symbolsArray: [ '!', '-', '^', '?', '&', '*', '#'],
			
	
};


let randomGeneratorConditions = {
	pwArray: [],
	pwLength: 8
};

let randomInt = function(min, max) {
                      min = Math.ceil(min);
                      max = Math.floor(max);
                      return Math.floor(Math.random() * (max - min + 1)) + min;
                    };


characters.lcLettersArray.forEach(function(item) {
	characters.ucLettersArray.push(item.toUpperCase());
	});

let regExp = /[a-z]+(?=[A-Z]+|[0-9]+)/ //proves true only if a-z char followed by either A-Z or a number

function getRandomLcLetter() {
		let num = randomInt(0, characters.lcLettersArray.length);
		let lcLetter = characters.lcLettersArray[num];
		return lcLetter;
		};

function getRandomUcLetter() {
		let num = randomInt(0, characters.ucLettersArray.length);
		let ucLetter = characters.ucLettersArray[num];
		return ucLetter;
	};

function getRandomSymbol() {
		let num = randomInt(0, characters.symbolsArray.length);
		let symbol = characters.symbolsArray[num];
		return symbol;
	};

function getRandomNumber() {
		let num = randomInt(0, 9);
		let number = num;
		return number;
}


function buildString() {
	
		
		let character = '';
		for (let x = 1; x <= 4; x++) {
			console.log('iteration: ' + x);
				switch(x) {
				case 4:
					character = getRandomNumber();
					randomGeneratorConditions.pwArray.push(character);
					console.log(character);
					break;
					
				case 3: 
					character = getRandomSymbol();
					randomGeneratorConditions.pwArray.push(character);
					console.log(character);
					break;
				case 2:
					character = getRandomUcLetter();
					randomGeneratorConditions.pwArray.push(character);
					console.log(character);
					break;
					
				case 1: 
					character = getRandomLcLetter();
					randomGeneratorConditions.pwArray.push(character);
					console.log(character);
					break;
			};
		};
		
		
	//let yourString = randomGeneratorConditions.pwArray.join('');
	console.log(randomGeneratorConditions.pwArray);

};

buildString();

	
