import { Container, Row } from "react-bootstrap";


const About = () => {
    return(
        <>
        <Container>
            <Row>
            <h1 className="text-center">EC Utbildning React Project </h1>
            </Row>
            <Row>
                <p className="text-center">
                    In the react course of EC Utbildning we got the assignment to use react to create a SPA application using the Swapi API. This assignment had the following requirements
                </p>
                  <hr />
                <ul className="text-center">
                    <li>Create a basic SPA app. The app should sort each star wars movie based on chronological order from date of release</li>
                    <li>
                        Each movie should display name as well as date of release
                    </li>

                    <li>
                        When the app loads it should display so with a loading state
                    </li>
                    <li>
                        Whenever the user clicks on a movie it should display a  modal or a new view with the title of the clicked movie and should display all the characters. Each character should be displayed with name and the list should be sorted in alphabetical order.
                    </li>
                    <li>
                        The modal should be able to quit out of and go back to the movie list
                    </li>
                </ul>
            </Row>
        </Container>
        </>
    )
}


export default About;