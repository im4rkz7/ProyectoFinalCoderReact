import { useState } from "react"
import { FloatingLabel, Form, Row, Col, Card } from "react-bootstrap"

const CheckoutForm = ({saveOrder}) => {

    const [buyerData, setBuyerData] = useState({ //Defining state hook of the buyer data. An object with empty properties as default
        name:'', phone:'', email:'' 
    })

    //Creating a handle function for changes in the form fields
    const handleChange = (event) => {
        setBuyerData({
            ...buyerData, //Dinamic fields and spread operator
            [event.target.name]: event.target.value
        })
    }

    //Creating a handle function for submit
    const handleSubmit = (event) => {

        if (buyerData.email !== buyerData.email2){ //Email verification. Prevents user from finishing submission
            alert('Sus correos electronicos deben coincidir. Intente denuevo')
        }
        else {
            
            delete buyerData.email2 //Delete unnecesary verification email property
            saveOrder(event, buyerData) //Ex ecute save order function. Passing object as a parameter for parent function

        }
        event.preventDefault() //Prevents default behavior of the event
        
    }

    return (
    <>
    <Card className="mx-auto" style={{ width: '40rem', margin:'20px'}}>
        <Form onSubmit={event => {handleSubmit(event)}} style={{ margin:'20px'}}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGroupName">
                <FloatingLabel controlId="floatingInputName" label="Primer Nombre">
                    <Form.Control type="text" onChange={handleChange}  name='name' value={buyerData.name || ''} required placeholder="Juan Garcia"/>
                </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="formGroupPhone">
                <FloatingLabel controlId="floatingInputPhone" label="Numero Telefonico">
                    <Form.Control type="tel" onChange={handleChange}  name='phone' value={buyerData.phone || ''} required placeholder="+54 3624 292929"/>
                </FloatingLabel>
                </Form.Group>

            </Row>

            <Row >
                <Col md={8}>
            <Form.Group  controlId="formGroupEmail">
                <FloatingLabel controlId="floatingInputEmail" label="Correo Electronico">
                    <Form.Control type="email" onChange={handleChange}  name='email' value={buyerData.email || ''} required placeholder="name@example.com"/>
                </FloatingLabel>
            </Form.Group>
            </Col>
            <Col md={4}>
            <Form.Group  className="border text-center " style={{borderRadius:"5px", padding:"15px"}} id="formGridCheckbox" as={Col} >
                    <Form.Check type="checkbox" label="Check out" required />
                </Form.Group>
                </Col>
            </Row>
            <br/>
            <Form.Group  controlId="formGroupEmail">
                <FloatingLabel controlId="floatingInputEmail" label="Repetir Correo Electronico">
                    <Form.Control type="email" onChange={handleChange }  name='email2' value={buyerData.email2 || ''} required placeholder="name@example.com"/>
                </FloatingLabel>
            </Form.Group>
        <br/>
        <button className="btn-outline-light" type="submit" style={{ borderRadius:"12px", backgroundColor: "#FF9F50", maxWidth:"200px", color: "white", margin:"5px", outlineColor:"white" }}>Enviar</button>
        </Form>
        </Card>
    
    </>
    
    )
}

export default CheckoutForm