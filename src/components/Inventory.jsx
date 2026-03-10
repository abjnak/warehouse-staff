import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Table } from "react-bootstrap";
import "../styles/PurchaseRequestTable.css";
import { Link } from "react-router-dom";

function Inventory({ getitem, getcattegory,status }) {
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
      </div>
      <div>
        {" "}
        <Form.Select>
          <option>SELECT STATUS</option>
        </Form.Select>
      </div>
      <Table striped bordered hover className="pr-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Material</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>MinStock</th>
            <th>Status</th>
            <th>Last Update</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {getitem?.map((item, index) => {
            const namecate = getcattegory.find(
              (cat) => cat.id === item.categoryId,
            );

            return (
              <tr key={item?.id}>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>{namecate?.name}</td>
                <td>{item?.quantity}</td>
                <td>{item?.unit}</td>
                <td>{item?.minStock}</td>
                <td>{status(item)}</td>
                <td>{item?.updatedAt}</td>
                <td></td>

                <td>
                  <Button variant="primary">Detail</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>{" "}
    </div>
  );
}
export default Inventory;
