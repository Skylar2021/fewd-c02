import React from 'react'
import TrackList from '../TrackList/TrackList'
import './Playlist.css'

export default function Playlist({playlistName,playlistTracks, onRemove, onNameChange, onSave}) {
    const handleNameChange = (e) =>{
        let newName = e.target.value
        if(!newName){
            return
        }
        onNameChange(newName)
    }
    return (
        <div className="Playlist">
            <input onChange={(e)=>handleNameChange(e)} defaultValue={playlistName} />
            <TrackList tracks={playlistTracks} isRemoval={true} onRemove={onRemove}/>
            <button onClick={()=> onSave()} className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}
