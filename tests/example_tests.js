module.exports = {
	"Test test" : function (client) {
		client
				.url(client.launch_url)
				.assert.elementPresent('head')
				.assert.elementPresent('body')
				.end();
	}
};
