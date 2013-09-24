var elems = {};

['username', 'password', 'save', 'accepted'].forEach(function (v) {
	elems[v] = document.getElementById(v);
});

function undeftoblank(str) {
	return str === undefined ? '' : str;
}

elems.username.value = undeftoblank(localStorage.username);
elems.password.value = undeftoblank(localStorage.password);
elems.save.addEventListener("click", function (e) {
	e.preventDefault();
	if (elems.accepted.checked) {
		localStorage.username = elems.username.value;
		localStorage.password = elems.password.value;
		elems.accepted.checked = false;
		alert("The credentials are saved");
	}
	else {
		alert("Accept the statement or don't use this feature ....");
	}
}, false);