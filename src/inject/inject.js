chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function () {
          var logo = document.getElementsByClassName('svg-logo_twitch')[0];
          if (logo != undefined){
            var logo = document.getElementsByClassName('svg-logo_twitch')[0];
            var img = document.createElement('img');
            img.src = chrome.extension.getURL('doctv.png');
            img.id = 'doctvlogo';
            img.alt = 'twitchdoctv';
            logo.parentNode.appendChild(img);
            logo.parentNode.removeChild(logo);
            clearInterval(readyStateCheckInterval);
	}
}, 10);
});
