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
    	return lcLetter;
		},
    getRandomUcLetter: () => {
        let num = randomObject.randomInt(0, characters.ucLettersArray.length-1);
		let ucLetter = characters.ucLettersArray[num];
        return ucLetter;
        },
    getRandomSymbol: () => {
        let num = randomObject.randomInt(0, characters.symbolsArray.length-1);
		let symbol = characters.symbolsArray[num];
        return symbol;
        },
    getRandomNumber: () => {
        let num = randomObject.randomInt(0, 9);
		let number = num;
		return number;
        }
};

characters.lcLettersArray.forEach(function(item) {
	characters.ucLettersArray.push(item.toUpperCase());
	});


let regExp = /[a-z]+(?=[A-Z]+|[0-9]+)/ //proves true only if a-z char followed by either A-Z or a number

let yourString= ''; 

const lcRegExp= /[a-z]+/;
const ucRegExp = /[A-Z]+/;
const numRegExp = /[0-9]+/;
const symbolRegExp = /(\!+)|(\-+)|(\^+)|(\?+)|(\&+)|(\*+)|(\#+)/;
let allConditionsMet= false;


function buildString() {
		let character = '';
        let pw = randomObject.pwLength;
        let x = randomObject.randomInt(1,pw*4);
        let enoughChars = (randomObject.pwArray.length === pw);
        let allConditionsMet = false;
            
    function compile() {
        while( enoughChars === false ) {
            
            console.log(x);
            
                if (x >= 1 && x <= pw ) {
                    character = randomObject.getRandomNumber();
                    randomObject.pwArray.push(character);
                    console.log(character);
                    x = randomObject.randomInt(1,pw*4);
                    
                } else if ( x >= pw+1 && x <= pw*2 ) {
                    character = randomObject.getRandomSymbol();
                    randomObject.pwArray.push(character);
                    console.log(character);
                    x = randomObject.randomInt(1,pw*4);
                    
                } else if ( x >= (pw+1)+pw && x <= pw*3 ) {
                    character = randomObject.getRandomUcLetter();
                    randomObject.pwArray.push(character);
                    console.log(character);
                    x = randomObject.randomInt(1,pw*4);
                    
                } else if ( x >= (pw+1)+pw+pw && x <= pw*4 ) {
                    character = randomObject.getRandomLcLetter();
                    randomObject.pwArray.push(character);
                    console.log(character);
                    x = randomObject.randomInt(1,pw*4);
                };
                yourString = randomObject.pwArray.join('');
                allConditionsMet = lcRegExp.test(yourString) && ucRegExp.test(yourString) && numRegExp.test(yourString) && symbolRegExp.test(yourString);
                enoughChars = randomObject.pwArray.length === pw;
                };
            };
        
                        
                if (allConditionsMet=== true) {
                    console.log("All conditions?: " + allConditionsMet);
                    console.log("Length condition?: " + enoughChars);
                    console.log(yourString);
                } else {
                    compile();
                }; 
            
                console.log(yourString);
                console.log(randomObject.pwArray.length);
                
        }; 
                       
        
	           
		
		
		
buildString();

	
