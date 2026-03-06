import "bootstrap/dist/css/bootstrap.min.css";
import { Badge, Button, Card, Form, ListGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
function Getpucharsebyid({
  data,
  supplie,
  getuserid,
  ImportReceiptItem,
  dataitem,
  onchage,
}) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header>Details ImportReceipt</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <span>
              <b>Code: </b>
            </span>
            <span>{data?.code}</span>
            -- <span>{data?.id}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <span>
              <b>Supplies: </b>
            </span>
            <span>{supplie?.name}</span>
          </ListGroup.Item>

          <ListGroup.Item>
            <span>
              <b>Create by: </b>
            </span>
            <span>{getuserid?.username}</span>
          </ListGroup.Item>

          <ListGroup.Item>
            <span>
              {" "}
              <b>Create at: </b>
            </span>
            <span>{data?.createdAt}</span>
          </ListGroup.Item>

          <ListGroup.Item>
            <span>
              <b>Status: </b>
            </span>
            <div>
              {" "}
              <Badge
                bg={
                  data?.status === "DRAFT"
                    ? "secondary"
                    : data?.status === "iNCOMPLETED"
                      ? "warning"
                      : "success"
                }
              >
                {data?.status}{" "}
              </Badge>
            </div>
            {data?.status !== "COMPLETED" && data?.status !== "iNCOMPLETED" && (
              <Form.Select
                size="sm"
                style={{ width: "130px" }}
                value={data?.status}
                onChange={(e) => onchage(data?.id, e.target.value)}
              >
                <option value="DRAFT">DRAFT</option>
                <option value="iNCOMPLETED">iNCOMPLETED</option>
                <option value="COMPLETED">COMPLETE</option>
              </Form.Select>
            )}
          </ListGroup.Item>

          <ListGroup.Item>
            <span>
              <b>Note: </b>
            </span>
            <span>{data?.note}</span>
          </ListGroup.Item>

          <ListGroup.Item>
            <span>
              <b>TotalAmount: </b>
            </span>
            <span>{data?.totalAmount}</span>
          </ListGroup.Item>
        </ListGroup>
      </Card>{" "}
      <div className="create-pr-table-wrapper">
        <Table striped bordered hover responsive className="create-pr-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name material</th>
              <th>Units</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
            </tr>
          </thead>

          <tbody>
            {ImportReceiptItem?.map((imports) => {
              const itemName = dataitem.find(
                (itemn) => itemn.id === imports.itemId,
              );

              return (
                <tr key={imports?.id}>
                  <td>{itemName?.code}</td>
                  <td>{itemName?.name}</td>
                  <td>{itemName?.unit}</td>
                  <td>{imports?.quantity}</td>
                  <td>{imports?.unitPrice}</td>
                  <td>{imports?.totalPrice}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button
          as={Link}
          to="/PurchaseRequest"
          type="button"
          className="create-pr-cancel-btn"
        >
          Back
        </Button>
      </div>
    </div>
  );
}
export default Getpucharsebyid;
