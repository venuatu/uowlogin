chrome.runtime.onMessage.addListener(function (request, sender, callback) {
	if (request === "credentials") {
		var credentials = {
			username: localStorage.username, 
			password: localStorage.password
		};

		for (var i in credentials) {
			if (credentials[i] === undefined)
				credentials[i] = '';
		}

		callback(credentials);
	}
	else {
		callback({});
	}
});
