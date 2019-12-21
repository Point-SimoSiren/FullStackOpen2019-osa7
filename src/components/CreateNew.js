import React, { useState } from 'react'

const CreateNew = (props) => {
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [info, setInfo] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        props.addNew({
            content,
            author,
            info,
            votes: 0
        })
    }
    const style1 = {
        marginLeft: 80,
        padding: 5,

    }
    const style2 = {
        marginLeft: 86,
        padding: 5,

    }
    const style3 = {
        marginLeft: 20,
        padding: 5,

    }
    const bt = {
        padding: 10,
        marginLeft: 3,
        backgroundColor: 'orange'
    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    content
            <input style={style1} name='content' value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div>
                    author
            <input style={style2} name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div>
                    url for more info
            <input style={style3} name='info' value={info} onChange={(e) => setInfo(e.target.value)} />
                </div>
                <button style={bt}>create</button>
            </form>
        </div>
    )
}
export default CreateNew