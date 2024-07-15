import React from 'react'
import { useState } from 'react'

export default function CreateTodo() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
    }

    const inputStyle = {
        padding: '12px 20px',
        fontSize: '16px',
        width: '100%',
        borderRadius: '8px',
        border: '1px solid #ddd',
        marginBottom: '15px',
        outline: 'none',
        transition: 'border-color 0.3s',
    }

    const inputFocusStyle = {
        borderColor: '#0052cc',
    }

    const buttonStyle = {
        padding: '12px 20px',
        fontSize: '16px',
        width: '100%',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#0052cc',
        color: '#fff',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    }

    const buttonHoverStyle = {
        backgroundColor: '#0041a3',
    }

    const handleFocus = (e) => {
        e.target.style.borderColor = inputFocusStyle.borderColor;
    }

    const handleBlur = (e) => {
        e.target.style.borderColor = '#ddd';
    }

    return (
        <div style={containerStyle}>
            <input
                style={inputStyle}
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
            /> <br />
            <input
                style={inputStyle}
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
            /> <br />

            <button
                style={buttonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                onClick={() => {
                    fetch('http://localhost:3000/todos', {
                        method: 'POST',
                        body: JSON.stringify({
                            title: title,
                            description: description,
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(async res => {
                        const data = await res.json()
                        alert("Todo Created")
                    })
                }}
            >Create a Todo</button>
        </div>
    )
}
