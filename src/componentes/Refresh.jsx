import React from 'react'


export const Refresh = ({setCharacters}) => {

    const comeBack = async () => {

        const response = await fetch(`https://rickandmortyapi.com/api/character/`)
        const data = await response.json();

        setCharacters(data.results);
    }

    return (
        <>
            <div className='d-flex justify-content-center '>
                <button  className='btn btn-info' onClick={comeBack}> Come Back</button>
            </div>
        </>
    )
}
