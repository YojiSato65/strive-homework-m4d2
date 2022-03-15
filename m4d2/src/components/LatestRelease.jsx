import { Container, Row, Col } from 'react-bootstrap'
import books from '../data/scifi.json'
import { Component } from 'react'

class LatestRelease extends Component
{
    state = {
        selectedBook: null,
    }

    render()
    {
        return (
            <Container className='mb-5'>
                <h2 className='my-4'>Latest Releases</h2>
            <Row>
                {books.map(book => (
                    <Col className='col-md-3' key={book.asin}>
                        <img src={book.img} alt="book-img" className='img-fluid w-100 mb-3' />
              </Col>

                ))}
            </Row>
          </Container>            
        )
    }
}

export default LatestRelease