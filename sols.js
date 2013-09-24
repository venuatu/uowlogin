chrome.runtime.sendMessage("credentials", function (cred) {
	if (cred.username != "" && cred.password != "") {
		var form = document.forms[0];
		if (form) {
			form.p_username.value = cred.username;
			form.p_password.value = cred.password;
			form.submit.click();
		}
	}
});
