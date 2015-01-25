'use strict';

module.exports = function (flag) {
	// in false, hide. in true, show all files on desktop
	var show = flag === 'show' ? 'true' : 'false';
	require('child_process').exec("defaults write com.apple.finder CreateDesktop -bool " + show  + " && killall Finder");
};
