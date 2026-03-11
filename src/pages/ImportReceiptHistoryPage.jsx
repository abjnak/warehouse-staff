import { Col, Container, Row } from "react-bootstrap";
import ImportReceiptHistory from "../components/ImportReceiptHistory";
import { useEffect, useState } from "react";
import { GetitemHistory, ImportReceiptstatus, Item } from "../services/PurchaseRequest";
import { useParams } from "react-router-dom";

function ImportReceiptHistoryPage() {
  const { id } = useParams();

  const [historyImportReceiptItem, sethistoryImportReceiptItem] = useState([]);
  const [historyImportReceipt, sethistoryImportReceipt] = useState([]);
  const [historyItem, sethistoryItem] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const ImportReceiptItems = await GetitemHistory(id);
        sethistoryImportReceiptItem(ImportReceiptItems);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, [id]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const ImportReceipts =await ImportReceiptstatus()
        const Items= await Item();

        sethistoryImportReceipt(ImportReceipts);
        sethistoryItem(Items)
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);


  console.log("data :", historyImportReceiptItem);
  console.log("data :",typeof historyImportReceiptItem);
  console.log("data :",typeof historyImportReceiptItem);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ImportReceiptHistory
              historyImportReceiptItem={historyImportReceiptItem}
              historyImportReceipt={historyImportReceipt}
              historyItem={historyItem}

            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default ImportReceiptHistoryPage;
