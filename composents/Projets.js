import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image1 from '../public/image1.jpg';
import image2 from '../public/image2.jpg';
import image3 from '../public/image3.jpg';
import '../styles/projets.module.css'; // Importer le fichier CSS contenant les styles

function GridExample() {
  const images = [image1, image2, image3];

  return (
    <Row xs={1} md={2} className="g-4">
      {images.map((image, idx) => (
        <Col key={idx}>
          <Card className="custom-card">
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;
