var util = require('util');

function testOutsideContext(){
	return 'This is a string from outside the context';
}

//externalCode is the context code is run from. 
var externalCode= {
	test: function() {
		//Doesn't work; will throw error:
//		util.print('external logging');
		return testOutsideContext();
	}
}