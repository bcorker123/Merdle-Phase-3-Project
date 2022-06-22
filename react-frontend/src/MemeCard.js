import React from 'react'
import { Card, Button } from 'react-bootstrap'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

function MemeCard() {
  return (
    <div
      className="container square-box d-flex justify-content-center align-items-center"
      id="navigation-text"
    >
      <Card style={{ top: '40px', width: '600px', height: '550px' }}>
        <Card.Img
          style={{
            alignSelf: 'center',

            maxWidth: 575,
            maxHeight: 525,
            minWidth: 575,
            minHeight: 525,
          }}
          variant="center"
          src="https://i.imgflip.com/1ur9b0.jpg"
        />
        <Card.Body>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  )
}

export default MemeCard
