import React from 'react'

const Notification = ({ notification }) => {
    const nStyle = {
        fontSize: 28,
        color: 'green'
    }
    if (notification) {
        return (
            <div>
                <h4 style={nStyle}> {notification}</h4>
            </div>
        )
    }
    else {
        return null
    }
}
export default Notification