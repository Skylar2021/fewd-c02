// Client ID: f357eb7d14144e5aafe2011b93976ea6
// Send a search request to the Spotify API
// Save a user’s playlist to their Spotify account

const clientID = 'client_id=f357eb7d14144e5aafe2011b93976ea6'
const redirectURI = 'redirect_uri=http://localhost:3000'
let token = null, expiredTime = null



// 'https://accounts.spotify.com/authorize?${clientID}&response_type=token&scope=playlist-modify-public&${redirectURI}'

// Get a Spotify user’s access token
let Spotify = {
    isValidToken() {

    },
    GetAccessToken() {
        if (token) {
            return token
        }
        token = window.location.href.match(/access_token=([^&]*)/)
        expiredTime = window.location.href.match(/expires_in=([^&]*)/)
        if (token && expiredTime) {
            return token
        } else {
            window.location = `https://accounts.spotify.com/authorize?${clientID}&response_type=token&scope=playlist-modify-public&${redirectURI}`
            // window.setTimeout(() => {
            //     token = null
            // }, expiredTime * 1000)
            return token
        }

    },
    async Search(term) {
        console.log(token)
        let response = await fetch(`https://api.spotify.com/v1/search?type=track,artist,album&q=${term}`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token[1]}` },
        })
        if (response.ok) {
            let data = await response.json()
            // console.log(data)
            return data.tracks.items
        } else {
            window.history.pushState('Access Token', null, '/');
            //     window.location = `https://accounts.spotify.com/authorize?${clientID}&${redirectURI}&response_type=token`
            //     token = window.location.href.match(/access_token=([^&]*)/)
            //     expiredTime = window.location.href.match(/expires_in=([^&]*)/)
        }

    },
    async savePlaylist(playlistName, tracksURIs) {
        console.log('123')
        // GET current user’s ID

        if (!playlistName && !tracksURIs) {
            return
        }
        let accessToken = Spotify.GetAccessToken()
        console.log(accessToken)
        
        let headers = {
            'Authorization': `Bearer ${accessToken[1]}`
        };
        let userID = '';
        let userProfile = await fetch('https://api.spotify.com/v1/me', {
            method: 'GET',
            headers: headers
        })
        if (userProfile.ok) {
            let result = await userProfile.json()
            userID = result.id
            console.log(userID)
        } else {
            console.log(userProfile.message)
        }
        // POST a new playlist with the input name to the current user’s Spotify account. Receive the playlist ID back from the request.
        let newPlaylist = await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ name: playlistName })
        })
        if (newPlaylist.ok) {
            let playlistInfo = await newPlaylist.json()
            console.log(playlistInfo)
            let playlistID = playlistInfo.id
            console.log(playlistID)
            // POST the track URIs to the newly-created playlist, referencing the current user’s account (ID) and the new playlist (ID)
            let addItem = await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({"uris": tracksURIs})
            })
            if(addItem.ok){
                console.log(addItem)
            }
        }


    }
}
export default Spotify