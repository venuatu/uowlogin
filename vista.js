chrome.runtime.sendMessage("credentials", function (cred) {
	if (cred.username != "" && cred.password != "") {
		var form = document.forms[0];
		if (form) {// see line 95 of https://vista.uow.edu.au/webct/logonDisplay.dowebct
			form.webctid.value = cred.username;
			form.password.value = cred.password;
			form.action = "/webct/urw/lc20663.tp0/authenticateUser.dowebct";
			form.timeZoneOffset.value = new Date().getTimezoneOffset() / 60;
			form.submit();
		}
	}
});
