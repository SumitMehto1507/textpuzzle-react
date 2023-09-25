import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
    return (
        <div>
            <div className={`card bg-${props.mode=== 'dark'?'gray': 'light'}`}>
                <div className={`card-header text-${props.mode=== 'dark'?'white': 'dark'} bg-${props.mode=== 'light'?'danger': 'danger'}`}>
                    TextPuzzle
                </div>
                <div className={`card-body text-${props.mode=== 'dark'?'danger': 'black'} bg-${props.mode=== 'light'?'white': 'dark'}`}>
                    <h5 className="card-title">Social Media Handles</h5>
                    <p className="card-text"> <a href="https://www.instagram.com/sumit_mehto15/" target="_blank" rel="noopener noreferrer"><b>Instagram</b></a></p>
                    <Link to="/" className="btn btn-danger">Home</Link>
                </div>
            </div>

        </div>
    )
}
