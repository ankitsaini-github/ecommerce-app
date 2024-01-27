import React from 'react'
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import classes from './Banner.module.css'

const Banner = () => {
  const location=useLocation()
  const player=location.pathname==='/home'?'':'d-none';

  return (<>
    <div
      className={`bg-secondary text-white p-5 ${classes.banner}`}
      style={{ fontFamily: "times-new-roman" }}
    >
      <h1 style={{ fontSize:'100px',fontWeight:'bolder' }}>The Generics</h1>
      <div className={`${player}`}>
        <Button variant="outline-info px-5 py-4 rounded-0 mt-5"><strong className='text-white fs-5'>Get Our Latest Album</strong></Button>
        <div className='my-4' style={{color:'#0DCAF0'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16" style={{cursor:'pointer'}}>
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
          </svg>
        </div>
      </div>
    </div>
    </>
  );
};

export default Banner