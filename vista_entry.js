var form = document.forms[0];
if (form) {// See line 97 of https://vista.uow.edu.au/webct/entryPageIns.dowebct
	form.action = "/webct/logonDisplay.dowebct";
	form.submit();
}
