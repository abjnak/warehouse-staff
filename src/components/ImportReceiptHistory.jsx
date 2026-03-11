import { Table } from "react-bootstrap";

function ImportReceiptHistory({
  historyImportReceiptItem,
  historyItem,
  historyImportReceipt,
}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Reference</th>
          <th>Type</th>
          <th>Date</th>
          <th>Quantity</th>
          <th>Supplier</th>
        </tr>
      </thead>
      <tbody>
        {historyImportReceiptItem?.map((e) => {
          const receiptcode = historyImportReceipt.find(
            (re) => e.receiptId === re.id,
          );
          const coderecep = receiptcode?.code.split("-")[0];
          return (
            <tr key={e?.id}>
              <td>{receiptcode?.code}</td>
              <td>{coderecep}</td>
              <td>{receiptcode?.createdAt}</td>
              <td
                style={{
                  color: coderecep === "IMP" ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {coderecep === "IMP" ? `+${e?.quantity}` : `-${e?.quantity}`}
                
              </td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
export default ImportReceiptHistory;
