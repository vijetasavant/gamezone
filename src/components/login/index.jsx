import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

const Login = ({ showModal, setShowModal, handleLogin }) => {
  const [user, setUser] = useState({
    name: "",
    password: ''
  })

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value
    })
  }

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Login with credentials</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='row'>
          <span className='mb-2'>
            <label>Enter username : &nbsp; </label>
            <input className='form-control' onChange={(e) => handleChange('name', e.target.value)} />
          </span>
          <span>
            <label>Enter password : &nbsp; </label>
            <input className='form-control' onChange={(e) => handleChange('password', e.target.value)} />
          </span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleLogin(user)}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Login