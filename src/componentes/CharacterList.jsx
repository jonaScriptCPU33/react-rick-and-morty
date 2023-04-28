import { useEffect, useState } from "react"
import { Character } from "./Character"
import { Error } from "./Error"
import { NavPage } from "./NavPage"
import { Refresh } from "./Refresh"
import { SearchBar } from "./SearchBar"


export const CharacterList = () => {


    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1); 

    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const data = await response.json();
            setLoading(false);
            setCharacters(data.results);
        }
        
        fetchData()

    }, [page])


    return (
        <div className="container">
         
            <SearchBar setCharacters={setCharacters} />
            <Refresh  setCharacters={setCharacters} />
            <NavPage page={page} setPage={setPage} />
            {
                !characters? (<Error setCharacters={setCharacters}/>) : (
                    <div className="row">
                        {
                            characters.map((character) => (
                                <div className="col-md-4 mb-4" key={character.id} >
                                    <Character character={character} />
                                </div>
                            ))
                        }
                    </div>
                )
            }
            <NavPage page={page} setPage={setPage}  />
        </div>
    )
}
