import React from 'react'
import './TrackList.css'
import Track from '../Track/Track'

export default function TrackList({tracks, isRemoval, onAdd, onRemove}) {
    return (
        <div className="TrackList">            
            {tracks.map((track, index)=>(
                <Track key={index} id={track.id} uri={track.uri} track={track} onAdd={onAdd} isRemoval={isRemoval} onRemove={onRemove}/>
            ))}
        </div>

    )
}
