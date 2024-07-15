import React from 'react'

export default function Todos({ todos }) {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
    }

    const todoStyle = {
        padding: '15px 20px',
        fontSize: '16px',
        width: '100%',
        borderRadius: '8px',
        border: '1px solid #ddd',
        marginBottom: '15px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    }

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#0052cc',
        color: '#fff',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        alignSelf: 'center',
        marginTop: '10px',
    }

    const buttonHoverStyle = {
        backgroundColor: '#0041a3',
    }

    return (
        <div style={containerStyle}>
            {todos.map(todo => (
                <div key={todo._id} style={todoStyle}>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <p>{todo.completed ? "Completed" : "Not Completed"}</p>
                    <button
                        style={buttonStyle}
                        onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                        onClick={() => {
                            fetch(`http://localhost:3000/completes`, {
                                method: 'PUT',
                                body: JSON.stringify({
                                    id: todo._id
                                }),
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }).then(async res => {
                                const data = await res.json()
                                alert("Todo Completed")
                            })
                        }}
                    >{todo.completed ? "Completed" : "Mark as Completed"}</button>
                </div>
            ))}
        </div>
    )
}
