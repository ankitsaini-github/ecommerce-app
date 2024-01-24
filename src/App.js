import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const products= [

  {
  
  title: 'Colors',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
  },
  
  {
  
  title: 'Black and white Colors',
  
  price: 50,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  
  },
  
  {
  
  title: 'Yellow and Black Colors',
  
  price: 70,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
  },
  
  {
  
  title: 'Blue Color',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  
  }
  
  ]

const App=()=> {
  const displaycards=()=>{
    return(
      <ul className='d-flex'>
        {products.map((p,i)=>
          <Card style={{ width: '18rem' }} key={i}>
            <Card.Title>{p.title}</Card.Title>
            <Card.Img variant="top" src={p.imageUrl} />
            <Card.Body>
              <Card.Text>
                price {p.price}
              </Card.Text>
              <Button variant="primary">Add to cart</Button>
            </Card.Body>
          </Card>
        )}
      </ul>
    )
  }
  return (
    <div className="App">
      <Navbar/>
      <div className='bg-secondary text-white display-1 p-5 fw-bolder'>
        The Generics
      </div>
      <div className='fw-bold fs-1 my-3'>
        Music
      </div>
      <div className='mt-4 '>
        {displaycards()}      
      </div>
    </div>
  );
}

export default App;
