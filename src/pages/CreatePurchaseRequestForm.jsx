import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/CreatePurchaseRequest.css";
import CreatePuchase from "../components/CreatePuchseRequest";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  CreatePuchases,
  CreatImportReceiptItem,
  ImportReceipt,
  Item,
  Supplier,
} from "../services/PurchaseRequest";
import { Container } from "react-bootstrap";
function CreatePurchaseRequestForm() {
  const userss = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];
  const [name, setname] = useState(userss.id || "loi");
  const [date, setdate] = useState(today);

  const [note, setnot] = useState("");
  const [items, setitems] = useState([]);
  const [supplie, setsupplie] = useState([]);
  const [supplieid, setsupplieid] = useState("");
  const [namematerial, setnamematerial] = useState([]);

  const [item, setitem] = useState([]);

  useEffect(() => {
    const fetchsupp = async () => {
      try {
        const datasupplie = await Supplier();
        const dataitem = await Item();
        setitem(dataitem);
        setsupplie(datasupplie);
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
        code: "IMP-" + Date.now(),
        createdBy: name,
        supplierId: supplieid,
        createdAt: date,
        status: "DRAFT",
        totalAmount: total,
        note: note,
      };

      const res = await ImportReceipt(form);

      const detailform = items.map((item) => {
        const formImport = {
          receiptId: res.id,
          itemId: item.itemid,
          quantity: Number(item.quantity),
          unitPrice: Number(item.unitPrice),
          totalPrice: item.quantity * item.unitPrice,
        };
        return CreatImportReceiptItem(formImport);
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
        <CreatePuchase
          deletes={deletes}
          addItems={addItems}
          handCreate={handCreate}
          userss={userss}
          items={items}
          setnot={setnot}
          setitems={setitems}
          date={date}
          supplie={supplie}
          item={item}
          supplieid={supplieid}
          setsupplieid={setsupplieid}
          namematerial={namematerial}
          setnamematerial={setnamematerial}
        />
      </Container>
    </div>
  );
}

export default CreatePurchaseRequestForm;
