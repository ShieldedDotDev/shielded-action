const core = require('@actions/core');
const shielded = require('shielded-cli');

(async function run() {
	try {
		const token    = core.getInput('shielded-token');
		const endpoint = core.getInput('endpoint');
		const title    = core.getInput('title');
		const color    = core.getInput('color');
		const text     = core.getInput('text');

		let options = {
			token: token,
		};

		if (endpoint) {
			options.endpoint = endpoint;
		}

		if (title) {
			options.title = title;
		}

		if (text) {
			options.text = text;
		}

		if (color) {
			options.color = color;
		}

		const s = new shielded.ShieldedAPI();
		await s.updateShield(options);
	} catch (error) {
		core.setFailed(error.message);
	}
})();
