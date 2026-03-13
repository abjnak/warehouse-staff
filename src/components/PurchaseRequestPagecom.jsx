import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Table } from "react-bootstrap";
import "../styles/PurchaseRequestTable.css";
import { Link } from "react-router-dom";

function PurchaseRequestPagecom({
  data,
  handfiler,
  arr,
  suppli,
  departmentsname,
  user,
}) {
  return (
    <div className="pr-table-wrapper">
      <div className="pr-table-header">
        <div>
          <h2 className="pr-table-title">
            Hiển thị danh sách Purchase Request
          </h2>
          <p className="pr-table-subtitle">
            Theo dõi trạng thái các phiếu yêu cầu mua vật tư trong kho.
          </p>
        </div>
        <div>
          {" "}
          <Button as={Link} to="/CreatePuchase" className="pr-create-btn">
            IMPORT
          </Button>
          <Button as={Link} to="/ExportReceiptPage" className="pr-create-btn">
            EXPORT
          </Button>
        </div>
      </div>
      <div>
        {" "}
        <Form.Select
          onChange={(e) => handfiler(e.target.value)}
          style={{ width: "180px" }}
        >
          <option>SELECT STATUS</option>
          <option value="COMPLETED">COMPLETED</option>
          <option value="INCOMPLETED">INCOMPLETED</option>
          <option value="DRAFT">DRAFT</option>
        </Form.Select>
        <Form.Select
          style={{ width: "180px" }}
          onChange={(e) => handfiler(e.target.value)}
        >
          <option>SELECT CREATE BY</option>

          {arr?.map((ma) => {
            return (
              <option key={ma.id} value={ma.id}>
                {ma.username}
              </option>
            );
          })}
        </Form.Select>
      </div>
      <Table striped bordered hover className="pr-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Partner</th>
            <th>Created By</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((pucha) => {
            const sup = suppli
              .filter((pu) => pu.id === pucha?.supplierId)
              .map((ma) => ma.name);
            const users = user
              .filter((pu) => pu.id === pucha?.createdBy)
              .map((ma) => ma.username);
            const depar = departmentsname
              .filter((pu) => pu.id === pucha?.departmentId)
              .map((ma) => ma.name);

            return (
              <tr key={pucha?.id}>
                <td>{pucha?.code}</td>
                <td>{sup.length > 0 ? sup : depar}</td>
                <td>{users}</td>
                <td>{pucha?.createdAt}</td>
                <td>{pucha?.totalAmount}</td>
                <td>{pucha?.status}</td>
                <td>
                  <Button
                    variant="primary"
                    as={Link}
                    to={`/DetailsPurchase/${pucha.code}/${pucha.id}`}
                  >
                    Detail
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>{" "}
    </div>
  );
}
export default PurchaseRequestPagecom;
