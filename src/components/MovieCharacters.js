import { useState, useEffect } from "react"


const MovieCharacters = (movie, show, characters) => {
    const [chars, addChars] = useState([])

    
    
    const characterPromises = movie.characters.map(character => fetch(character).then(res => res.json()))
    useEffect(() => {
          Promise.all(characterPromises).then(res => addChars(res))
              
      }, [show])
    

    return(
       
        <>
            {chars.sort((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        }).map(character => {
                return(
                    <p>{character.name}</p>
                )
            })}
        </>
    )
}



export default MovieCharacters