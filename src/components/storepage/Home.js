import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const homeelements=[
  {
    date:'JUL 16',
    city:'DETROIT, MI',
    hall:'DTE ENERGY MUSIC THEATRE',
    id:'show1',
  },
  {
    date:'JUL 19',
    city:'TORONTO,ON',
    hall:'BUDWEISER STAGE',
    id:'show2',
  },
  {
    date:'JUL 22',
    city:'BRISTOW, VA',
    hall:'JIGGY LUBE LIVE',
    id:'show3',
  },
  {
    date:'JUL 29',
    city:'PHOENIX, AZ',
    hall:'AK-CHIN PAVILION',
    id:'show4',
  },
  {
    date:'AUG 2',
    city:'LAS VEGAS, NV',
    hall:'T-MOBILE ARENA',
    id:'show5',
  },
  {
    date:'AUG 7',
    city:'CONCORD, CA',
    hall:'CONCORD PAVILION',
    id:'show6',
  }
]

function Homeitem(props){
  return(
    <Row className='border-bottom  border-dark py-3' style={{fontFamily:'times-new-roman',color:'rgb(119, 119, 119)'}}>
      <Col xs={2} style={{color:'black'}}>
        {props.item.date}
      </Col>
      <Col xs={2}>
        {props.item.city}
      </Col>
      <Col xs={4}>
        {props.item.hall}
      </Col>
      <Col xs={4}>
        <Button variant="info text-white fw-bold px-4" size='sm'>BUY TICKETS</Button>
      </Col>
    </Row>
  )
}

function Home() {
  return (
    <Container>
      <div
        className="fw-bolder fs-1 my-4 p-4"
        style={{ fontFamily: "times-new-roman" }}
      >
        TOURS
      </div>
      <div className='w-75 justify-content-center m-auto'>
        {homeelements.map((item)=>
          <Homeitem key={item.id} item={item}/>
        )}
      </div>
    </Container>
  )
}

export default Home