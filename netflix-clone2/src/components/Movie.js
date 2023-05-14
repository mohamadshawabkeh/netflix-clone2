import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ModalMovie from './ModalMovie';


function Movie(props) {

    const [showFlag, setShowFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});
    const handleShow = (item) => {
        console.log(item);
        setClickedMovie(item);
        setShowFlag(true);
    }

    const handleclose = () => {
        setShowFlag(false);
    }
    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {props.favData.map((item) => {
                    return <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.posterPath} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <p>{item.overview}</p>
                                 
                                </Card.Text>
                                <Button variant="primary" onClick={() => { handleShow(item) }}>Add to Favorite</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>

            <ModalMovie showFlag={showFlag} handleclose={handleclose} favData={clickedMovie} />
        </>
    )
}
export default Movie;