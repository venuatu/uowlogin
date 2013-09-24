// make each link open in a new tab
Array.prototype.forEach.call(document.querySelectorAll('a'),
	function (v, k) {
		v.addEventListener("click", function (e) {
			e.preventDefault();
			chrome.tabs.create({ url: v.href });
		}, false);
});
