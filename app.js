'use strict'

console.log('script running');

function buildString() {

    const characters = {
        lc: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ],
        uc: [],
        symbols: [ '!', '-', '^', '?', '&', '*', '#'],
    };
    
     const regExes = {
        lcRegExp: /[a-z]+/,
        ucRegExp: /[A-Z]+/,
        numRegExp: /[0-9]+/,
        symbolRegExp: /(\!+)|(\-+)|(\^+)|(\?+)|(\&+)|(\*+)|(\#+)/
    };

    function getRandomLcLetter() {
            let num = randomObject.randomInt(0, characters.lc.length-1);
            let lcLetter = characters.lc[num];
            randomObject.finalArray.push(lcLetter);
            };
    function getRandomUcLetter() {
            let num = randomObject.randomInt(0, characters.uc.length-1);
            let ucLetter = characters.uc[num];
            randomObject.finalArray.push(ucLetter);
            };
    function getRandomSymbol() {
            let num = randomObject.randomInt(0, characters.symbols.length-1);
            let symbol = characters.symbols[num];
            randomObject.finalArray.push(symbol);
            };
    function getRandomNumber(){
            let num = randomObject.randomInt(0, 9);
            let number = num;
            randomObject.finalArray.push(number);
            };


    let randomObject = {
        finalArray: [],
        pwLength: 8,  //this will eventually be set by the user
        randomInt: function(min, max) {
                          min = Math.ceil(min);
                          max = Math.floor(max);
                          return Math.floor(Math.random() * (max - min + 1)) + min;
                        },
        //functions placed into array for iterating through later
        arrayOfFunctions: [ getRandomLcLetter, getRandomUcLetter, getRandomSymbol, getRandomNumber ]
        };

    
    let yourString = '';
    let allConditionsMet = regExes.lcRegExp.test(yourString) && regExes.ucRegExp.test(yourString) && regExes.numRegExp.test(yourString) && regExes.symbolRegExp.test(yourString);
    
    characters.lc.forEach(function(item) {
        characters.uc.push(item.toUpperCase());
        });
 
//now perform the function
    while (allConditionsMet === false) {
        randomObject.finalArray= [];
    
        for(var i = 0; i < randomObject.pwLength; i++) {
            let x = randomObject.randomInt(0,3);
            randomObject.arrayOfFunctions[x]();
            yourString = randomObject.finalArray.join('');
            allConditionsMet = regExes.lcRegExp.test(yourString) && regExes.ucRegExp.test(yourString) && regExes.numRegExp.test(yourString) && regExes.symbolRegExp.test(yourString);
            };       
        
        yourString = randomObject.finalArray.join('');
        console.log(yourString);
        console.log(allConditionsMet);
        }; //exit while loop

       }; //exit buildString function 

		
buildString();

	
