'use strict'

function generator() {
	let params = {
        numberOfChars: document.getElementById("charLength").value,
        specialChars: document.getElementById("checkbox").checked
    };
		
	let configObject = {
		pwLength: params.numberOfChars,
		getRandomInteger: function(min,max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * ((max-min) + 1)) + min;
		},
	    characters: {
			lc: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ],
        	uc: [],
        	symbols: [ '!', '-', '^', '?', '&', '*', '#'],
        	numbers: [ 0,1,2,3,4,5,6,7,8,9]
		},
		types: [],
		regExes: {
			lcRegExp: /[a-z]+/,
        	ucRegExp: /[A-Z]+/,
        	numRegExp: /[0-9]+/,
        	symbolRegExp: /(\!+)|(\-+)|(\^+)|(\?+)|(\&+)|(\*+)|(\#+)/
			}
		};

		configObject.characters.lc.forEach(function(char){
			configObject.characters.uc.push(char.toUpperCase());
		});
		
		configObject.types= Object.keys(configObject.characters);
		
	const returnObject = {
		
		getParams: function(prop) {
			return params[prop];
		},
		setParams: function() {
			params.numberOfChars = document.getElementById("charLength").value;
        	params.specialChars = document.getElementById("checkbox").checked;
        	return params;
		},
		onSubmit: function() {
			let params = {
				numberOfChars: document.getElementById("charLength").value,
				specialChars: document.getElementById("checkbox").checked
			};
			return returnObject.buildString(params);
		},
		testConditionsFor: function(condition,output) {
			let re = configObject.regExes;
			if (returnObject.getParams('specialChars')){
             	condition = re.lcRegExp.test(output) && re.ucRegExp.test(output) && re.numRegExp.test(output) && re.symbolRegExp.test(output);
            } else {
                condition = re.lcRegExp.test(output) && re.ucRegExp.test(output) && re.numRegExp.test(output) && !re.symbolRegExp.test(output);
            };
            return condition;
		},
		getChar: function(type) {
			let arrIdx = configObject.getRandomInteger(0,type.length-1);
			let char = type[arrIdx];
			return char;
		},
		buildString: function(params){
			let breakLoop = 0;
			let finalArray = [];
			let outputString;
			let allConditionsMet = false;
			
			returnObject.setParams();

			while (!allConditionsMet){
				finalArray = [];
				//loop length is based on pwlength spec'd by user
				for (var i = 0; i < returnObject.getParams('numberOfChars'); i++){
					//pulls a random integer within length-1th of character types
					let x = configObject.getRandomInteger(0,(configObject.types.length)-1);
					let type = configObject.types[x];
					//calls getChar function using param randomly pulled from char types- pushes returned char into finalArray
					finalArray.push(returnObject.getChar(configObject.characters[type]));
					outputString = finalArray.join('');
				};	
				//test if special chars specified for regExp tests
            	allConditionsMet = returnObject.testConditionsFor(allConditionsMet,outputString);
           	
            	// breakLoop++;
             //   	if (breakLoop === 1000000) {
            	// 	allConditionsMet = true;
            	// 	console.error("infinite loop broken- fix your code");
            	// };
			};
			document.getElementById('string').innerHTML = "Your string is " + outputString;
			return outputString;
		}
	};
	
	return returnObject;
	
};

const submitButton = document.getElementById('submitButton');
const _rpg = generator();

submitButton.addEventListener("click", _rpg.onSubmit, false);


