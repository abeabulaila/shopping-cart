import React from 'react'
import { Button, Container, Navbar, Modal } from 'react-bootstrap'
import { useState } from 'react'

const NavbarComponent = () => {

    const [show, setShow] = useState(false);
    const handleShow =() => setShow(!show)
    
    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button onClick={handleShow}> Cart 0 Items</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>This is the modal body.</h1>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NavbarComponent;