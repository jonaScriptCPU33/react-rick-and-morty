import React from 'react'

export const Character = ({ character }) => {



    return (
        <div key={character.id} className="m-1 p-2 text-center card bg-info w-100 h-100 border border-3 -warning ">
            <h2 className='m-1 p-1'> Name: {character.name} </h2>
            <img src={character.image} className="img-fluid rounded-pill m-4 p-3" alt={character.name} />
            <div className='m-1 p-1'>
                <p> Status: {character.status} </p>
                <p>Gender: {character.gender} </p>
                <p>Species: {character.species} </p>
            </div>
        </div>
    )
}
