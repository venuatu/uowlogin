var cancel = document.querySelector("input[type=submit][value=Cancel]");
if (cancel !== null) {
	cancel.click();
} else {
	chrome.runtime.sendMessage("credentials", function (cred) {
		if (cred.username != "" && cred.password != "") {
			var form = document.forms[0];
			if (form) {
				form.username.value = cred.username;
				form.password.value = cred.password;
				form.submit();
			}
		}
	});
}
