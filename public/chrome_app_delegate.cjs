chrome.app.runtime.onLaunched.addListener(function (launchData) {
	chrome.app.window.create('index.html#/', {
		'bounds': {'width': 700,'height': 900}
	}, function (createdWindow) {
		var win = createdWindow.contentWindow;
		win['QTLaunchData'] = launchData;
	});

});
