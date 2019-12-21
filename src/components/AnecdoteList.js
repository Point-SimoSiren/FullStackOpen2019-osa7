import React from 'react'
import Anecdote from './Anecdote'

const AnecdoteList = ({ anecdotes, Link, vote, setNotification }) => (
    <div>
        <h2>Anecdotes</h2>
        <ul>
            {anecdotes.map(anecdote =>
                <li key={anecdote.id}>
                    <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
                </li>
            )}
        </ul>
    </div>
)
export default AnecdoteList