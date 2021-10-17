import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
    const [text, setText] = useState('');

    const handleTextChange = event => {
        setText(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (text.length === 0) {
            return
        } else {
            let obj = {
                id: generateId(),
                text: text,
                expiresAt: getNewExpirationTime()
            };
            props.addThought(obj);
            setText('')
        }
    }

    return (
        <form className="AddThoughtForm" onSubmit={event => handleSubmit(event)}>
            <input
                type="text"
                aria-label="What's on your mind?"
                placeholder="What's on your mind?"
                onChange={event => handleTextChange(event)}
                value={text}
            />
            <input type="submit" value="Add" />
        </form>
    );
}
