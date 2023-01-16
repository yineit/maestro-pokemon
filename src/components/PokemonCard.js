import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PokemonCard({ infoPokemon }) {

    return (

        <>
            <Container className="mt-4">
                <Row>
                    <Col>
                        <Card className="mx-auto" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={infoPokemon.img} />
                            <Card.Body>
                                <Card.Title>{infoPokemon.name}</Card.Title>
                                <Card.Text>
                                    <p>Attack {infoPokemon.stat_attack} | Defense {infoPokemon.stat_defense} | Speed {infoPokemon.stat_speed}</p>
                                </Card.Text>

                            </Card.Body>
                        </Card>


                    </Col>
                </Row>
            </Container>

        </>
    );
}