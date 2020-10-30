document.addEventListener("DOMContentLoaded", function() {

    var songTemplateHtml = document.getElementById('song-template').innerHTML;
    var songTemplateFunction = Handlebars.compile(songTemplateHtml);

    var songbody = document.getElementById("songCard");

    function clear(data) {
        document.getElementById("submitSong").value = data;
    }



    document
        .getElementById("trackSearch")
        .addEventListener("submit", function(event) {
            // always remember a prevent default
            event.preventDefault();
            // collect the value from the form and variabilize it
            var spotifyTrack = document.getElementById("submitSong").value;
            console.log(spotifyTrack);
            // go get the tracks available from Spotify
            axios.get('https://api.spotify.com/v1/search?q=' + spotifyTrack + '&type=track', {
                    headers: {
                        'Authorization': 'Bearer BQBVTSlqw_1p2hDkGIGkJN-Yvpy71Vaa7dZzhYaSCpCiLbBvru32at-VfirNw1DX-b9yC7ssSO0DcjtYcuc7dUpvcAmN7SpuZ41uLHy83wZxj8EbehlButAavzqhwvaDUjiIK2E-QDdRa0Nk_Uw3GyfnqgpLVPmbzZkq7B_N6dQ'
                    }
                })
                .then(function(response) {

                    var songs = response.data.tracks.items;
                    console.log(songs);
                    var songsnumber = response.data.tracks.items.length;
                    console.log('number of songs returned:' + songsnumber);



                    songs.forEach(function(track) {

                        var songHtml = songTemplateFunction(track);
                        var album = track.album.name;
                        var recording = track.artists[0].name;
                        var name = track.name;
                        var image = track.album.images[0].url;
                        var mpeg = track.preview_url;
                        var openin = track.album.external_urls.spotify;
                        var artistopenin = track.artists[0].external_urls.spotify;

                        var songHtml = songTemplateFunction({
                            album: name,
                            recording: recording,
                            name: name,
                            mpeg: mpeg,
                            image: image,
                            artistopenin: artistopenin,
                            openin: openin
                        });

                        // console.log("the album is " + album);
                        // console.log("the artist is " + recording);
                        // console.log("the songtitle is " + name);
                        // console.log("the image url is " + image);

                        songbody.innerHTML += songHtml;
                    });

                })
                .catch(function(err) {
                    console.log(err);
                });

        })

});