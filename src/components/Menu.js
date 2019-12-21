import React from 'react'
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
} from 'react-router-dom'
import AnecdoteList from './AnecdoteList'
import About from './About'
import CreateNew from './CreateNew'

const Menu = ({ anecdotes, addNew, vote }) => {
    const style = {
        padding: 10,
        marginLeft: 3,
        backgroundColor: 'orange'
    }
    return (
        <div>
            <Router>
                <div>
                    <Link to="/">
                        <button style={style} type="button">
                            anecdotes
     </button>
                    </Link>
                    <Link to="/create">
                        <button style={style} type="button">
                            add your own anecdote
     </button>
                    </Link>
                    <Link to="/about">
                        <button style={style} type="button">
                            about
     </button>
                    </Link>

                    <Route exact path="/" render={() =>
                        <AnecdoteList anecdotes={anecdotes} vote={vote} />
                    } />
                    <Route exact path="/about" render={() =>
                        <About />
                    } />
                    <Route exact path="/create" render={() =>
                        <CreateNew addNew={addNew} />
                    } />
                </div>
            </Router >
        </div >
    )
}
export default Menu