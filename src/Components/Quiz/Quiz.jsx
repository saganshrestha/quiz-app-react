
import React from 'react'
import './Quiz.css'

const Quiz = () => {
    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            <h2 className='question'>1. Which device is required for the Internet Connection?</h2>
            <ul>
                <li>Modem</li>
                <li>Router</li>
                <li>LAN Cable</li>
                <li>Pen Drive</li>
            </ul>
            <button>Next</button>
            <div className="index">
                1 of 5 Questions
            </div>
        </div>
    )
}

export default Quiz