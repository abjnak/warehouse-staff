import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Table } from "react-bootstrap";

import "../styles/PurchaseRequest.css";

import { useEffect, useState } from "react";
import PurchaseRequestPagecom from "../components/PurchaseRequestPagecom";
import {
  Department,
  ExportReceipt,
  PuchaseReques,
  Supplier,
} from "../services/PurchaseRequest";
import { User } from "../services/authService";

export default function PurchaseRequestPage() {
  const [puchase, setpuchase] = useState([]);
  const [departments, setdepartments] = useState([]);
  const [departmentsname, setdepartmentsname] = useState([]);
  const [supplier, setsupplier] = useState([]);
  const [user, setuser] = useState([]);
  const [list, setlist] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const datadepartment = await ExportReceipt();
        const datadepartmentname = await Department();
        setdepartmentsname(datadepartmentname)
        const data = await PuchaseReques();
        const suppli = await Supplier();
        const users = await User();

        setdepartments(datadepartment);
        setuser(users);
        setsupplier(suppli);
        setpuchase(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  const datarecep = [...puchase,...departments];
  const handfiler = (string) => {
    const statuss = puchase.filter(
      (puch) => puch.status === string || puch.createdBy === string,
    );
    setlist(statuss);
  };

  const arr = user.filter((use) =>
    puchase.some((pu) => pu.createdBy === use.id),
  );

  return (
    <Container
      fluid
      style={{
        background: "#111827",
        borderRadius: 16,
        padding: 24,
        boxShadow: "0 16px 40px rgba(0,0,0,0.55)",
        border: "1px solid #1f2937",
        color: "#e5e7eb",
      }}
    >
      <PurchaseRequestPagecom
        data={list.length > 0 ? list : datarecep}
        suppli={supplier}
        departmentsname={departmentsname}
        user={user}
        handfiler={handfiler}
        arr={arr}
      />
    </Container>
  );
}
