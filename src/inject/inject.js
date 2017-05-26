chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            // ----------------------------------------------------------
            // This part of the script triggers when page is done loading

            // ----------------------------------------------------------

            var logo = document.getElementsByTagName('svg')[0];
            var img = document.createElement('img');
            img.src = chrome.extension.getURL('doctv.png');
            img.id = 'doctvlogo';
            img.alt = 'twitchdoctv';
            logo.parentNode.appendChild(img);
            logo.parentNode.removeChild(logo);

	}
	}, 10);
});
