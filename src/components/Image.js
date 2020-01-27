import React from 'react'

export default function ImageThing({path}) {
    return (
        <img style={{
            display: "block",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            height: "100%", 
            maxWidth: "100%"}} 
        src={require(path)} alt="fuck"/>
    )
}