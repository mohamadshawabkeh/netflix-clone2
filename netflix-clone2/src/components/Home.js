import { useEffect } from "react";
import { useState } from "react";
import MovieList from "./MovieList";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Home(){
    const [movieData, setMovieData] = useState([]);
    const resultReq = async () => {
        const serverURL = "http://localhost:5000/trending";
        const response = await fetch(serverURL);
        const data = await response.json();
        
        console.log(serverURL);
        setMovieData(data);
    }

    useEffect(()=>{
        resultReq();

    },[]);
    return (
       <>
       <h1>Home</h1>
            {/* <button onClick={sendReq}>send req</button> */}
            <Row xs={1} md={4} className="g-4">
                {movieData.map((item) => {
                    return <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.posterPath} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <p>{item.overview}</p>
                                    
                                </Card.Text>
                                <Button variant="primary">See More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>

        <MovieList /> 

        </>


);
};
export default Home;