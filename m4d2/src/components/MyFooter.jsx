import { Card, Button } from 'react-bootstrap'

const MyFooter = () => (
    <Card className="text-center fixed-bottom">
        <Card.Header>Footer</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
)

export default MyFooter