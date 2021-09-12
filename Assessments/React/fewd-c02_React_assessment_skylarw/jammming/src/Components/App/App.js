import './App.css';
import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify';

function App(props) {
	// const [tracks, setTracks] = useState([])

	let searchResultsinitialState = [
		{
			id: '1',
			name: 'Believe In Live',
			artist: 'Charmaine',
			album: 'My Spiritual Life'
		},
		{
			id: '2',
			name: 'All We Have Is Now',
			artist: 'Charmaine',
			album: 'LOST n FOUND'
		},
		{
			id: '3',
			name: 'The Pink Room',
			artist: 'Ivanna',
			album: 'Single'
		}
	]
	// searchResultsinitialState
	// playlistinitialState
	let playlistinitialState = {
		id: '4',
		name: 'Everything I need',
		artist: 'Skylar Gray',
		album: 'Aquaman Soundtrack'
	}
	const [searchResults, setSearchResults] = useState([])
	const [playlistName, setPlaylistName] = useState('New Listsss')
	const [playlistTracks, setPlaylistTracks] = useState([])
	// track should be a object
	const addTrack = track => {
		if (playlistTracks.includes(track)) {
			return
		}
		setPlaylistTracks(playlistTracks => playlistTracks.concat(track))
	}

	const removeTrack = track => {
		setPlaylistTracks(playlistTracks => playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id))

	}

	const updatePlaylistName = (newName) => {
		setPlaylistName(newName)
	}

	const savePlaylist = () => {
		console.log('click')
		let trackURIs = [];
		playlistTracks.forEach(track => { trackURIs.push(track.uri) })
		console.log(trackURIs)
		Spotify.savePlaylist(playlistName, trackURIs)
		setPlaylistName('New Playlist')
		setPlaylistTracks([])
	}

	async function search(term) {
		// allows a user to enter a search parameter, receives a response from the Spotify API,
		// and updates the searchResults state with the results from a Spotify request.
		// console.log(term)
		let tracks = await Spotify.Search(term)
		// let  = result.tracks.items
		// console.log(tracks)
		// console.log(tracks[0].album.name)
		// console.log(tracks[0].id)
		// console.log(tracks[0].uri)
		// console.log(tracks[0].name)
		// console.log(tracks[0].artists[0].name)
		// console.log(result.tracks)
		// return tracks
		setSearchResults(tracks)
	}

	// spotify access token
	let access_token = null
	if (access_token) {
		console.log(access_token)
		return access_token
	} else {
		access_token = Spotify.GetAccessToken()
		console.log(access_token[1])
	}

	return (
		<div>
			<h1>Ja<span className="highlight">mmm</span>ing</h1>
			<div className="App">
				<SearchBar onSearch={search} />
				<div className="App-playlist">
					<SearchResults searchResults={searchResults} onAdd={addTrack} />
					<Playlist onSave={savePlaylist} onNameChange={updatePlaylistName} onRemove={removeTrack} playlistName={playlistName} playlistTracks={playlistTracks} />
				</div>
			</div>
		</div>
	)
}

export default App