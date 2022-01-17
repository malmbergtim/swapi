import { useState, useEffect } from "react"


const MovieCharacters = (movie, show, characters) => {
    const [chars, addChars] = useState([])

    
    
    const characterPromises = movie.characters.map(character => fetch(character).then(res => res.json()))
    useEffect(() => {
          Promise.all(characterPromises).then(res => addChars(res))
              
      }, [show])
    

    return(
       
        <>
            {chars.map(character => {
                return(
                    <p>{character.name}</p>
                )
            })}
        </>
    )
}



export default MovieCharacters