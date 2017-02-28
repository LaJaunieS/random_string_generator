'use strict'

console.log('script running');

let submitButton = document.getElementById("submitButton");

function onSubmit() {
    //capture input values
    //pass input values as parameters in build string function
    //run build string function
    let params = {
        numberOfChars: document.getElementById("charLength").value,
        specialChars: document.getElementById("checkbox").checked
    };
    buildString(params);
    };


function buildString(params) {
    let stringParams = params;
    
    const characters = {
        lc: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ],
        uc: [],
        symbols: [ '!', '-', '^', '?', '&', '*', '#'],
    };
    
    
    characters.lc.forEach(function(item) {
        characters.uc.push(item.toUpperCase());
        });
    
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
        pwLength: stringParams.numberOfChars,  //this will eventually be set by the user
        randomInt: function(min, max) {
                          min = Math.ceil(min);
                          max = Math.floor(max);
                          return Math.floor(Math.random() * (max - min + 1)) + min;
                        },
        //functions placed into array for iterating through later
        arrayOfFunctions: [ ]
        };
    
    //test if special chars specified in order to define character array
   if (stringParams.specialChars === true) {
        randomObject.arrayOfFunctions = [ getRandomLcLetter, getRandomUcLetter,  getRandomNumber, getRandomSymbol  ]
        } else {
            randomObject.arrayOfFunctions = [ getRandomLcLetter, getRandomUcLetter,  getRandomNumber ]
        };
    
    let yourString = '';
    let allConditionsMet = false;
    
   
 
    //now perform the function
    while (allConditionsMet === false) {
        randomObject.finalArray= [];
    
        for(var i = 0; i < randomObject.pwLength; i++) {
            let x = randomObject.randomInt(0,randomObject.arrayOfFunctions.length-1);
            randomObject.arrayOfFunctions[x]();
            yourString = randomObject.finalArray.join('');
            
            //test if special chars specified for regExp tests
            if (stringParams.specialChars === true) {
                allConditionsMet = regExes.lcRegExp.test(yourString) && regExes.ucRegExp.test(yourString) && regExes.numRegExp.test(yourString) && regExes.symbolRegExp.test(yourString);
                } else {
                    allConditionsMet = regExes.lcRegExp.test(yourString) && regExes.ucRegExp.test(yourString) && regExes.numRegExp.test(yourString);
                };
            };       
        
        yourString = randomObject.finalArray.join('');
        console.log(allConditionsMet);
        console.log("String: " + yourString);
        }; //exit while loop
        document.getElementById("string").innerHTML = "Your random string is: " + yourString; 
    
    
       }; //exit buildString function 


submitButton.addEventListener("click", onSubmit, false);

//onSubmit();		
//buildString();

	
