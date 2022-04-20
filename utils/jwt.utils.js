//IMPORTS
var jwt = require('jsonwebtoken');
const signature = require('../config/config.js');



// =================================================================================



async function createToken() {
	const token = jwt.sign({},
		signature.jwt.signString,
		{
			expiresIn: '1h'
		});

	return token;
};


// =================================================================================


//EXPORTS
module.exports = {
	createToken
}
