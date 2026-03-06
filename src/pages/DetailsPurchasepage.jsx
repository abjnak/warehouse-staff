import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/Login.css";
import "../styles/PurchaseDetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ChangestatusHande,
  CreatImportReceiptItem,
  GetImportReceiptItem,
  getPuchrse,
  ImportReceipt,
  ImportReceiptid,
  ImportReceiptstatus,
  Item,
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

  console.log("data:" + ImportReceiptItems);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const params = await Supplier();
        const users = await User();
        const dataitem = await Item();

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
      setgetpucharse(change);
    } catch (error) {
      console.log(error);
    }
  };
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
