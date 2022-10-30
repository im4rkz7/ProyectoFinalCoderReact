import { Card } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import { Link } from "react-router-dom"

const ItemNotFound = () => {
    return ( 
        <>
        <Card className="text-center mx-auto" style={{ width: '30rem' }}>
            <CardHeader>OOPS</CardHeader>
             El producto no existe. Verifica la direccion de URL
             
             {/* Button for going back to 'home' */}
            <button className="btn btn-sm mx-auto" style={{ borderRadius:"12px", backgroundColor: "#FF9F50", margin:"5px", outlineColor:"white", maxWidth:'100px' }}>
                <Link style={{  color: "white" }} to="/">Volver</Link> 
            </button>
        </Card>
        </>
    )
}

export default ItemNotFound