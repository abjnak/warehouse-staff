import { Col, Container, Row } from "react-bootstrap";
import Inventory from "../components/Inventory";

export default function InventoryPages(){
    return( <div>
     <Container>
        <Row>
         <Inventory/>
        </Row>
     </Container>
    </div>)
}