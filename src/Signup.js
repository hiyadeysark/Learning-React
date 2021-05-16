import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    // const { signup } = useAuth()
    
    return (
        <>
          <Card>
    <Card.Body>
      <h2 className="text-center md-4">Sign Up</h2>
      <Form>
        <Form.Group id="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" ref={emailRef} required />
        </Form.Group>
        <Form.Group id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={passwordRef} required />
        </Form.Group>
        <Form.Group id="password-confirm">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control type="password" ref={passwordConfirmRef} required />
        </Form.Group>
        <button type="submit" className="btn w-100">Sign Up</button>
      </Form>
    </Card.Body>
  </Card>
  
  <div className="w-100 text-center mt-2">
    Already have an account? Log In  
    </div>
    <br /><br />
    </>
    )
}