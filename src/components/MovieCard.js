import {Card, Button, Modal} from 'react-bootstrap'
import { useState, } from "react";
import MovieCharacters from './MovieCharacters';
const MovieCard = (movie) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <>
       
       <Card style={{ width: '18rem', marginLeft: "1rem" }} className="mt-3 d-inline-block">
  <Card.Body>
    <Card.Title>{movie.title} </Card.Title>
    <Card.Subtitle className="mb-2 text-muted">
      Episode {movie.episode} Release: {movie.releaseDate} Director {movie.director}</Card.Subtitle>
    <Card.Text>
    </Card.Text>
    <Card.Link><Button variant="dark" onClick={handleShow}>Characters</Button></Card.Link>
  </Card.Body>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{movie.title}: Characters</Modal.Title>
        </Modal.Header>
        <Modal.Body><MovieCharacters show={show}></MovieCharacters></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
</Card>

        </>
    )
}



export default MovieCard