import { Card } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import {Link } from "react-router-dom"

const Item = ({prods}) => {
    return (
        <>
        <Col>
            <div  style={{ justifyContent: 'center'}}>
            <Link to={`/detalle/${prods.id}`}>
                <Card  className="itemCard mx-auto" style={{ width: '100%', height:'17rem', borderRadius:"15px", justifyContent: 'center'}}>
                    <Card.Img src={prods.pictureUrl}  style={{  marginLeft:'25%'}} className={`${prods.category} `}/>
                </Card>
                
                <h3>{prods.title}</h3>
                    
                <button className="btn-outline-light" size="lg" style={{ borderRadius:"12px", backgroundColor: "#FF9F50", color: "white", marginBottom:"15px", outlineColor:"white" }}>Ver Detalles</button>
            </Link>
            </div>
        </Col>
        
        </>
    )
}

export default Item