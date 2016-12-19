'use strict'

console.log('script running');

const characters = {
	lcLettersArray: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ],
	ucLettersArray: [],
	symbolsArray: [ '!', '-', '^', '?', '&', '*', '#'],
};

function getRandomLcLetter() {
		let num = randomObject.randomInt(0, characters.lcLettersArray.length-1);
		let lcLetter = characters.lcLettersArray[num];
    	randomObject.finalArray.push(lcLetter);
		};
function getRandomUcLetter() {
        let num = randomObject.randomInt(0, characters.ucLettersArray.length-1);
		let ucLetter = characters.ucLettersArray[num];
        randomObject.finalArray.push(ucLetter);
        };
function getRandomSymbol() {
        let num = randomObject.randomInt(0, characters.symbolsArray.length-1);
		let symbol = characters.symbolsArray[num];
        randomObject.finalArray.push(symbol);
        };
function getRandomNumber(){
        let num = randomObject.randomInt(0, 9);
		let number = num;
		randomObject.finalArray.push(number);
        };


let randomObject = {
	finalArray: [],
	pwLength: 8,
    randomInt: function(min, max) {
                      min = Math.ceil(min);
                      max = Math.floor(max);
                      return Math.floor(Math.random() * (max - min + 1)) + min;
                    },
    
    arrayOfFunctions: [ getRandomLcLetter, getRandomUcLetter, getRandomSymbol, getRandomNumber ]
};

characters.lcLettersArray.forEach(function(item) {
	characters.ucLettersArray.push(item.toUpperCase());
	});


const regExes = {
    lcRegExp: /[a-z]+/,
    ucRegExp: /[A-Z]+/,
    numRegExp: /[0-9]+/,
    symbolRegExp: /(\!+)|(\-+)|(\^+)|(\?+)|(\&+)|(\*+)|(\#+)/
};



function buildString() {
        let pw = randomObject.pwLength;
        //let enoughChars = randomObject.pwArray.length;
        let allConditionsMet = false;
        let yourString = '';
        
    allConditionsMet = regExes.lcRegExp.test(yourString) && regExes.ucRegExp.test(yourString) && regExes.numRegExp.test(yourString) && regExes.symbolRegExp.test(yourString);
    
    
    if (allConditionsMet === true) {
        yourString = randomObject.finalArray.join('');
        console.log(yourString);
        } else {
            console.log('run loop');
            for(var i = 0; i < pw; i++) {
                let x = randomObject.randomInt(0,3);
                randomObject.arrayOfFunctions[x]();
            };       
                yourString = randomObject.finalArray.join('');
                allConditionsMet = regExes.lcRegExp.test(yourString) && regExes.ucRegExp.test(yourString) && regExes.numRegExp.test(yourString) && regExes.symbolRegExp.test(yourString);
                console.log(allConditionsMet);
                console.log(yourString);
        };
                

   }; //exit buildString function 
	
		
buildString();

	
