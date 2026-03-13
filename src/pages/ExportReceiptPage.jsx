import { Col, Container, Row } from "react-bootstrap";
import ExportReceipt from "../components/ExportReceipt";
import { useEffect, useState } from "react";
import { AddExportReceipt, AddExportReceiptItem, Department, Item } from "../services/PurchaseRequest";

function ExportReceiptPage() {

const userss = JSON.parse(localStorage.getItem("user"));

  const today = new Date().toISOString().split("T")[0];
  const [name, setname] = useState(userss.id || "loi");
  const [date, setdate] = useState(today);

  const [note, setnot] = useState("");
  const [items, setitems] = useState([]);
  const [department, setdepartment] = useState([]);
  const [departmentid, setdepartmentid] = useState("");
  const [namematerial, setnamematerial] = useState([]);

  const [item, setitem] = useState([]);

  useEffect(() => {
    const fetchsupp = async () => {
      try {
        const datadepartment = await Department();
        const dataitem = await Item();
        setitem(dataitem);
       setdepartment(datadepartment)
      } catch (error) {
        console.log(error);
      }
    };

    fetchsupp();
  }, []);

  const deletes = (id) => {
    const deleteid = items?.filter((item) => item.id !== id);
    setitems(deleteid);
  };
  const addItems = () => {
    const item = {
      id: Date.now(),
      itemid: "",
      quantity: "",
      unitPrice: "",
      totalPrice: "",
    };
    setitems([...items, item]);
  };
  const total = items.reduce((sum, number) => {
    return sum + number.quantity * number.unitPrice;
  }, 0);

  const handCreate = async (e) => {
    e.preventDefault();
    try {
      const form = {
        code: "EXP-" + Date.now(),
        createdBy: name,
        departmentId: departmentid,
        createdAt: date,
        status: "DRAFT",
        totalAmount: total,
        note: note,
      };

      const res = await AddExportReceipt(form);

      const detailform = items.map((item) => {
        const formImport = {
          receiptId: res.id,
          itemId: item.itemid,
          quantity: Number(item.quantity),
          unitPrice: Number(item.unitPrice),
          totalPrice: item.quantity * item.unitPrice,
        };
        return AddExportReceiptItem(formImport);
      });

      await Promise.all(detailform);
      alert("successfuly!");
    } catch (error) {
      alert("Tạo đơn thất bại" + error);
    }
  };

  return (
    <div>
      <Container>
        <ExportReceipt
          deletes={deletes}
          addItems={addItems}
          handCreate={handCreate}
          userss={userss}
          items={items}
          setnot={setnot}
          setitems={setitems}
          date={date}
          department={department}
          item={item}
         departmentid ={departmentid}
          setdepartmentid={setdepartmentid}
          namematerial={namematerial}
          setnamematerial={setnamematerial}
        />
      </Container>
    </div>
  );
}
export default ExportReceiptPage;
