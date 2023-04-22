import React from 'react'

export const Character = ({character}) => {
    return (
        <div key={character.id} className="text-center p-5">
            <h2> {character.name} </h2>
            <img src={character.image} className="img-fluid rounded-pill" alt={character.name} />
            <p> {character.origin.name} </p>
        </div>
    )
}
