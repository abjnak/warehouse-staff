import { Col, Container, Row } from "react-bootstrap";
import ExportReceipt from "../components/ExportReceipt";

function ExportReceiptPage() {


  return (
    <div>
      <Container>
        <Row>
          <Col><ExportReceipt/></Col>
        </Row>
      </Container>
    </div>
  );
}
export default ExportReceiptPage;
