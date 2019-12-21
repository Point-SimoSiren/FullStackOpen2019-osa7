import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import AnecdoteList from './components/AnecdoteList'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import CreateNew from './components/CreateNew'
import Anecdote from './components/Anecdote'
import Notification from './components/Notification'


const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote, props) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
    props.history.push('/')
    setNotification(`a new notification ${anecdote.content} created!`)
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  const btnStyle = {
    padding: 10,
    marginLeft: 3,
    backgroundColor: 'orange'
  }
  return (
    <div>
      <Header />
      <Router>
        <div>
          <Link to="/">
            <button style={btnStyle} type="button">
              anecdotes
            </button>
          </Link>
          <Link to="/create">
            <button style={btnStyle} type="button">
              write new!
              </button>
          </Link>
          <Link to="/about">
            <button style={btnStyle} type="button">
              about
            </button>
          </Link>
          <Notification notification={notification} />

          <Route exact path="/" render={() =>
            <AnecdoteList anecdotes={anecdotes} Link={Link} vote={vote} />
          } />
          <Route exact path="/anecdotes/:id" render={({ match }) =>
            <Anecdote anecdote={anecdoteById(match.params.id)} />
          } />
          <Route exact path="/about" render={() =>
            <About />
          } />
          <Route exact path="/create" render={() =>
            <CreateNew addNew={addNew} />
          } />
        </div>
      </Router >
      < Footer />
    </div >
  )
}
export default App
