import React from 'react';
import logo from './logo.svg';
import michael from './Michael.jpg'
import kellie from './Kellie.jpg'
import brinley from './Brinley.jpg'
import jessica from './Jessica.jpg'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <body className="App-header">

        <div className="wholeDisplay">

          <div className="mainPerson">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" width="300px" src={michael} />
              <Card.Body>
                <Card.Title>Michael Ballstaedt</Card.Title>
                <Card.Text>
                  I'm an absolute sweetheart just looking for my honey bun
                </Card.Text>
              </Card.Body>
            </Card>
          </div>


          <div className="carousel">

            <div className="onePicCarousel">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" width="200px" src={kellie} />
                <Card.Body>
                  <Card.Title>Kellie Bronson</Card.Title>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="onePicCarousel">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" width="200px" src={brinley} />
                <Card.Body>
                  <Card.Title>Brinley Miller</Card.Title>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="onePicCarousel">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" width="200px" src={jessica} />
                <Card.Body>
                  <Card.Title>Jessica Alba</Card.Title>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="onePicCarousel">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" width="200px" src={kellie} />
                <Card.Body>
                  <Card.Title>Kellie Bronson</Card.Title>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="onePicCarousel">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" width="200px" src={brinley} />
                <Card.Body>
                  <Card.Title>Brinley Miller</Card.Title>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="onePicCarousel">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" width="200px" src={jessica} />
                <Card.Body>
                  <Card.Title>Jessica Alba</Card.Title>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="onePicCarousel">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" width="200px" src={kellie} />
                <Card.Body>
                  <Card.Title>Kellie Bronson</Card.Title>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="onePicCarousel">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" width="200px" src={brinley} />
                <Card.Body>
                  <Card.Title>Brinley Miller</Card.Title>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="onePicCarousel">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" width="200px" src={jessica} />
                <Card.Body>
                  <Card.Title>Jessica Alba</Card.Title>
                  <Card.Text>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

        </div>





      </body>
    </div>
  );
}

export default App;
