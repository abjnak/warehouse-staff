import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/Login.css";
import "../styles/PurchaseDetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ChangestatusHande,
  GetImportReceiptItem,
  Getitem,
  ImportReceiptid,
  ImportReceiptItem,
  ImportReceiptstatus,
  Item,
  ItembyID,
  Sumquantity,
  Supplier,
} from "../services/PurchaseRequest";
import Getpucharsebyid from "../components/DetailsCom";
import { User } from "../services/authService";

export default function GetPuchasebyid() {
  const { id } = useParams();
  const [getpucharse, setgetpucharse] = useState(null);
  const [supplie, setsupplie] = useState([]);
  const [user, setuser] = useState([]);
  const [ImportReceiptItems, setImportReceiptItems] = useState([]);
  const [getitem, setgetitem] = useState([]);
  const [ImportReceipt, setImportReceipt] = useState([]);
  const [ImportReceiptItemss, setImportReceiptItem] = useState([]);

  useEffect(() => {
    const getpubyid = async () => {
      try {
        const params = await ImportReceiptid(id);
        const dataImportReceiptItems = await GetImportReceiptItem(id);
        setImportReceiptItems(dataImportReceiptItems);
        setgetpucharse(params);
      } catch (error) {
        console.log(error);
      }
    };
    getpubyid();
  }, [id]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const params = await Supplier();
        const users = await User();
        const dataitem = await Item();
        const dataImportReceipt = await ImportReceiptstatus();
        const dataImportReceiptItem = await ImportReceiptItem();

        setImportReceipt(dataImportReceipt);
        setImportReceiptItem(dataImportReceiptItem);
        setgetitem(dataitem);
        setuser(users);
        setsupplie(params);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  const changestatus = async (id, status) => {
    try {
      const change = await ChangestatusHande(id, status);
      const dataitem = await Getitem(id);
      if (change.status === "COMPLETED") {
        for (const i of dataitem) {
          const getItembyid = await ItembyID(i.itemId);
          const newquantity = i.quantity + getItembyid.quantity;
          await Sumquantity(i.itemId, newquantity);
          
        }
      }

      setImportReceiptItem(dataitem);
      setgetpucharse(change);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("data ; " + getpucharse?.id, getpucharse?.status);
  console.log("data ; ", ImportReceiptItemss);

  const getsupplieid = supplie.find((su) => su.id === getpucharse?.supplierId);
  const getuserid = user.find((su) => su.id === getpucharse?.createdBy);

  return (
    <div className="purchase-details-page">
      <Container className="purchase-details-card">
        <Row>
          <Col>
            <h2 className="purchase-details-title">
              Chi tiết Purchase Request
            </h2>
            <p className="purchase-details-subtitle">
              Thông tin chi tiết của phiếu yêu cầu mua vật tư.
            </p>
            <div className="purchase-details-content">
              <Getpucharsebyid
                data={getpucharse}
                supplie={getsupplieid}
                getuserid={getuserid}
                ImportReceiptItem={ImportReceiptItems}
                dataitem={getitem}
                onchage={changestatus}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
