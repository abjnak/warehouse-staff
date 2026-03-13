import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/Login.css";
import "../styles/PurchaseDetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {

  Department,
  ExportReceiptid,
  GetExportReceiptbyId,
  GetImportReceiptItem,
  Getitem,
  ImportReceiptid,
  Item,
  ItembyID,
  Sumquantity,
  Supplier,
  UpdateSatusExport,
  UpdateSatusImport,
} from "../services/PurchaseRequest";
import Getpucharsebyid from "../components/DetailsCom";
import { User } from "../services/authService";

export default function GetPuchasebyid() {
  const {code, id } = useParams();
  const [getpucharse, setgetpucharse] = useState(null);
  const [ExportReceiptsId, setExportReceiptsId] = useState(null);
  const [supplie, setsupplie] = useState([]);
  const [user, setuser] = useState([]);
  const [ImportReceiptItems, setImportReceiptItems] = useState([]);
  const [depart, setdepart] = useState([]);
  const [DetailsExportReceipts, setDetailsExportReceipts] = useState([]);

  const [getitem, setgetitem] = useState([]);

  useEffect(() => {
    const getpubyid = async () => {
      try {
        if (code.startsWith("IMP")) {
          const params = await ImportReceiptid(id);
          setgetpucharse(params);
        }
        if (code.startsWith("EXP")) {
          const dataExportReceipts = await ExportReceiptid(id);
          setExportReceiptsId(dataExportReceipts);
        }

        const dataImportReceiptItems = await GetImportReceiptItem(id);
        const dataExport = await GetExportReceiptbyId(id);
        setDetailsExportReceipts(dataExport);
        setImportReceiptItems(dataImportReceiptItems);
      } catch (error) {
        console.log(error);
      }
    };
    getpubyid();
  }, [id]);

  const datarecep = { ...getpucharse, ...ExportReceiptsId };
  const datadetails = [...ImportReceiptItems, ...DetailsExportReceipts];

 
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const params = await Supplier();
        const users = await User();
        const dataitem = await Item();
        const datadepart = await Department();
        setdepart(datadepart);
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
      let changes = null;
      if (code.startsWith("IMP")) {
        const change = await UpdateSatusImport(id, status);
        const dataitem = await Getitem(id);
        if (change.status === "COMPLETED") {
          for (const i of dataitem) {
            const getItembyid = await ItembyID(i.itemId);
            const newquantity = i.quantity + getItembyid.quantity;
            await Sumquantity(i.itemId, newquantity);
          }
          changes = change;
        }
      }
      if (code.startsWith("EXP")) {
        const change = await UpdateSatusExport(id, status);
        const dataitem = await GetExportReceiptbyId(id);
        if (change.status === "COMPLETED") {
          for (const i of dataitem) {
            const getItembyid = await ItembyID(i.itemId);
            if (i.quantity > 0) {
              const newquantity = getItembyid.quantity - i.quantity;
              await Sumquantity(i.itemId, newquantity);
            }
          }
          changes = change;
        }
      }
     console.log("status" , changes)
      setgetpucharse(changes);
    } catch (error) {
      console.log(error);
    }
  };

  const getsupplieid = supplie.find((su) => su.id === getpucharse?.supplierId);
  const getdepartmenid = depart.find(
    (su) => su.id === ExportReceiptsId?.departmentId,
  );

  const getuserid = user.find((su) => su.id === getpucharse?.createdBy);
  const getuser = user.find((su) => su.id === ExportReceiptsId?.createdBy);
  const dataPaten = { ...getsupplieid, ...getdepartmenid };
  const datausers = { ...getuser, ...getuserid };
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
                data={datarecep}
                supplie={dataPaten}
                getuserid={datausers}
                ImportReceiptItem={datadetails}
                dataitem={getitem}
                onchage={changestatus}
                ExportReceiptsId={ExportReceiptsId}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
