const cron = require('node-cron');
const axios = require('axios');

module.exports = () => {
	//scheduling cron task to be executed every 2 minutes and 30 secondes
	cron.schedule('0,30 */2 * * * *', async function () {
		//generating token from API
		const response = await axios.get('http://localhost:3000/token');
		const token = response.data.token;

		//getting all messages from DB
		await axios.get('http://localhost:3000/messages').then(resp => {
			try {
				//for each unsent messages, updating id_state ; added token for verification
				resp.data.forEach(element => {
					axios.put("http://localhost:3000/messages/send", { "id": element.id, "id_state": 3, "token": token });
				});
			} catch (error) {
				console.log(error);

				//in case of error, regeneration of a new token then waiting for next cron job
				response = axios.get('http://localhost:3000/token');
				token = response.data.token;
			}
		});
	});
};
