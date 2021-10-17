import React, { useEffect } from 'react';

export function Thought(props) {
    const { thought, removeThought } = props;
    
    useEffect(() => {
        const timeRemaining = thought.expiresAt - Date.now();
        let timeoutID = setTimeout(()=>{
            removeThought(thought.id)
        },timeRemaining)
        return () => {
            clearTimeout(timeoutID)
        }
    })

    return (
        <li className="Thought">
            <button
                aria-label="Remove thought"
                className="remove-button">
                &times;
            </button>
            <div className="text">{thought.text}</div>
        </li>
    );
}
