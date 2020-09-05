import React from 'react'
import './Story.css'
import {Avatar} from "@material-ui/core"

function Story( {image, profilesSrc, title }) {
    return (
        <div style={ {backgroundImage: `url(${image})` }} 
        className="story">
            <Avatar src={profilesSrc} className="story__avatar" />
            <h4> {title}</h4>
        </div>
    )
}

export default Story
