let Spotify = require('spotify-web-api-js');
let s = new Spotify();
let spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('<here_your_access_token>');

spotifyApi.getArtistAlbums(
    '43ZHCT0cAZBISjO8DG9PnE',
    { limit: 10, offset: 20 },
    function (err, data) {
        if (err) console.error(err);
        else console.log('Artist albums', data);
    }
);