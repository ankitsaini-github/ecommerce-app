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
  return (<>
    <div className='bg-secondary p-3'>
      <div>
        <Button variant="outline-info px-5 py-4 rounded-0"><strong className='text-white fs-5'>Get Our Latest Album</strong></Button>
      </div>
      <div className='my-4' style={{color:'#0DCAF0'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16" style={{cursor:'pointer'}}>
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
        </svg>
      </div>
    </div>
    <Container>
      <div
        className="fw-bolder fs-1 my-4 p-4"
        style={{ fontFamily: "times-new-roman" }}
      >
        TOURS
      </div>
      <div className='w-75 justify-content-center m-auto'>
        {homeelements.map((item)=>
          <Homeitem item={item}/>
        )}
      </div>
    </Container>
  </>
  )
}

export default Home