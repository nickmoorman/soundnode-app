'use strict';

// http://www.last.fm/api/desktopauth
// http://www.last.fm/api/scrobbling
app.factory('lastFmService', function(
    $rootScope
) {
    var lastFm = {};

    lastFm.

    // data will be a track object
    // http://www.last.fm/api/show/track.updateNowPlaying
    $rootScope.$on('trackStarted', function(event, data) {
        console.log("Track started");
        console.log(data);
        var artist = data.songUser;
        var title = data.songTitle;
    });

    // data will be an HTML element
    // http://www.last.fm/api/show/track.scrobble
    $rootScope.$on('trackEnded', function(event, data) {
        console.log("Track ended");
        console.log(data);
    });

    return lastFm;
});
