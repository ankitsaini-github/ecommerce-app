import React, { useContext, useRef, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import classes from './Auth.module.css';
import { AuthContext } from '../store/store-context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Auth() {
  const userpassword=useRef(null)
  const useremail=useRef(null)
  const history=useHistory();
  const [isLogin,setisLogin]=useState(true)
  const [isloading,setisloading]=useState(false)
  const authCtx=useContext(AuthContext)

  const switchHandler=()=>{
    setisLogin((prev)=>!prev);
  }

  const submithandler=(e)=>{
    e.preventDefault();
    const enteredEmail=useremail.current.value;
    const enteredPassword=userpassword.current.value;

    let url;
    if(isLogin){
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNjyGdvZOwov0B76Oqc9_7DGWkVBnUODY';
    }
    else{
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNjyGdvZOwov0B76Oqc9_7DGWkVBnUODY';
    }
    setisloading(true);
    fetch(url,{
      method:'POST',
      body:JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers:{
        "Content-Type": "application/json",
      },
    }).then(res=>{
      setisloading(false);
      if(res.ok){
        window.alert('successfull !!');
        return res.json();
      }else{
        return res.json().then(data=>{
            let errorMessage = 'Authentication failed!';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
        })
      }
    }).then(data=>{
      console.log(data.idToken);
      authCtx.login(data.idToken);
      history.replace('/store')
    }).catch(err=>{
      alert(err.message)
    })
  }
  return (
    <Container>
      <div
        className="fw-bolder fs-1 my-4 p-4"
        style={{ fontFamily: "times-new-roman" }}
      >
        {isLogin? <>LOGIN</> : <>SIGN IN</>}
      </div>
      <div className='m-auto'>
        <Form className='m-auto border text-start p-5 shadow rounded-3 fs-5' onSubmit={submithandler} style={{maxWidth:'600px'}}>
          <Form.Group className="mb-3" controlId="useremail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={useremail} required/>
            <Form.Text className="text-muted fs-6">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="userpassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={userpassword} required/>
          </Form.Group>

          {!isloading? <>
            <Button variant="info my-3 w-100 fw-bold text-white" type="submit" size='lg'>
            {isLogin? <>LOGIN</> : <>SIGN IN</>}
            </Button>
            <p className={classes.switchlink} onClick={switchHandler}>
              {isLogin?<>Create new Account ?</>:<>Already have an account ?</>}
            </p>
          </>: <p> Sending Request... </p>}
        </Form>
      </div>
    </Container>
  )
}

export default Auth