import React from 'react'
import './Track.css'

export default function Track({track, onAdd, isRemoval, onRemove}) {
    const addTrack = () =>{
        onAdd(track)
    }

    const removeTrack = () => {
        onRemove(track)
    }

    const renderAction = () => {
        if(isRemoval){
            return <button className="Track-action" onClick={removeTrack}>-</button>
        }else{
            return <button className="Track-action" onClick={addTrack}>+</button>        
        }
    }
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artists[0].name} | {track.album.name}</p>
                {/* {console.log(typeof track.artists)} */}
            </div>
                {renderAction()}
        </div>
    )
}
