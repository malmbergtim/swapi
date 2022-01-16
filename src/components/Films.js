import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { css } from "@emotion/react";
import { DotLoader} from "react-spinners";
const Films = () => {
  const [film, addFilm] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((err) => console.log("error", err))
      .then((data) => addFilm(data.results))
      .finally(() => {
        setLoading(false);
      });
  }, []);



  console.log("this is the " + film);
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
  
  return (
    <Container>
        {
            loading ? 
            <DotLoader color={"#292b2c "} loading={loading} css={override} size={150} />
            :
            film.map((movie) => {
                return (
                  <>
                  <MovieCard
                    title={movie.title}
                    episode={movie.episode_id}
                    releaseDate={movie.release_date}
                    characters={movie.characters}
                  ></MovieCard>
                  </>
                  
                );
              })
            
        }
      
    </Container>
  );
};

export default Films;
