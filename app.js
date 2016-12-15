'use strict'

console.log('script running');

const characters = {
	lcLettersArray: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ],
	ucLettersArray: [],
	symbolsArray: [ '!', '-', '^', '?', '&', '*', '#'],
};


let randomObject = {
	pwArray: [],
	pwLength: 10,
    randomInt: function(min, max) {
                      min = Math.ceil(min);
                      max = Math.floor(max);
                      return Math.floor(Math.random() * (max - min + 1)) + min;
                    },
    getRandomLcLetter: () => {
		let num = randomObject.randomInt(0, characters.lcLettersArray.length-1);
		let lcLetter = characters.lcLettersArray[num];
    	randomObject.pwArray.push(lcLetter);
		},
    getRandomUcLetter: () => {
        let num = randomObject.randomInt(0, characters.ucLettersArray.length-1);
		let ucLetter = characters.ucLettersArray[num];
        randomObject.pwArray.push(ucLetter);
        },
    getRandomSymbol: () => {
        let num = randomObject.randomInt(0, characters.symbolsArray.length-1);
		let symbol = characters.symbolsArray[num];
        randomObject.pwArray.push(symbol);
        },
    getRandomNumber: () => {
        let num = randomObject.randomInt(0, 9);
		let number = num;
		randomObject.pwArray.push(number);
        }
};

characters.lcLettersArray.forEach(function(item) {
	characters.ucLettersArray.push(item.toUpperCase());
	});


let regExp = /[a-z]+(?=[A-Z]+|[0-9]+)/ //proves true only if a-z char followed by either A-Z or a number



const regExes = {
    lcRegExp: /[a-z]+/,
    ucRegExp: /[A-Z]+/,
    numRegExp: /[0-9]+/,
    symbolRegExp: /(\!+)|(\-+)|(\^+)|(\?+)|(\&+)|(\*+)|(\#+)/
};



function buildString() {
        let character = '';
        let pw = randomObject.pwLength;
        let enoughChars = randomObject.pwArray.length;
        let allConditionsMet = false;
        let yourString= '';            
        let x = randomObject.randomInt(1,pw*4);
    
    if( randomObject.pwArray.length < 10 ) {
        
            while( allConditionsMet === false ) {
            
            console.log(x);
                //pull a character based on random x value
                if (x >= 1 && x <= pw ) {
                    randomObject.getRandomNumber();
                    
                    
                    x = randomObject.randomInt(1,pw*4);
                    
                } else if ( x >= pw+1 && x <= pw*2 ) {
                    randomObject.getRandomSymbol();
                    
                    x = randomObject.randomInt(1,pw*4);
                    
                } else if ( x >= (pw+1)+pw && x <= pw*3 ) {
                    randomObject.getRandomUcLetter();
                    
                    x = randomObject.randomInt(1,pw*4);
                    
                } else if ( x >= (pw+1)+pw+pw && x <= pw*4 ) {
                    randomObject.getRandomLcLetter();
                    
                    x = randomObject.randomInt(1,pw*4);
                }; 
                //check to see if all characters condition met
                yourString = randomObject.pwArray.join('');
                allConditionsMet = regExes.lcRegExp.test(yourString) && regExes.ucRegExp.test(yourString) && regExes.numRegExp.test(yourString) && regExes.symbolRegExp.test(yourString);
                console.log("All conditions?: " + allConditionsMet);
                console.log(yourString);
                console.log(randomObject.pwArray.length);
                }; //exit while loop if all characters included
        
    } else {
        console.log(yourString);
        console.log(randomObject.pwArray.length);

    }; 
       
        
   }; //exit buildString function 
	
		
buildString();

	
