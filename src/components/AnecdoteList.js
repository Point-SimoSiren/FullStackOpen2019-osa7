import React from 'react'

const AnecdoteList = ({ anecdotes, vote, setNotification }) => (
    <div>
        <h2>Anecdotes</h2>
        <ul>
            {anecdotes.map(anecdote => <li key={anecdote.id} >{anecdote.content}</li>)}
        </ul>
    </div>
)
export default AnecdoteList