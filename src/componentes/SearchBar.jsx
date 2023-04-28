import React, { useState } from 'react'


export const SearchBar = ({ setCharacters }) => {

    const [inputValue, setInputValue] = useState('')

    const handleOnChange = ({ target }) => {
        setInputValue(target.value);
        // console.log(target.value)
    }

    const onSubmite = async (event) => {
  
        event.preventDefault()

        if(inputValue.trim() <= 1)alert('You need to insert more than 1 charecter');

        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
        const data = await response.json();

        setInputValue('')

        setCharacters(data.results);


    }

    return (
        <form
            onSubmit={onSubmite}
            className='mb-5 mt-5  d-flex justify-content-center '
        >
            <input
                type="text"
                placeholder='Search your favorite character'
                className='p-1 m-1 w-50 h-50 rounded-5 border-3 '
                onChange={handleOnChange}
                value={inputValue}
            />
        </form>
    )
}
