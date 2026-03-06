import axios from "axios";
export const PuchaseReques = async () => {
  const listPuchase = await axios.get(`http://localhost:3001/ImportReceipt`);
  if (!listPuchase.data) {
    throw new Error("không có data");
  }
  return listPuchase.data;
};

export const ImportReceipt = async (data) => {
  const res = await axios.post(`http://localhost:3001/ImportReceipt`, data);
  return res.data;
};
export const CreatImportReceiptItem = async (data) => {
  const res = await axios.post(`http://localhost:3001/ImportReceiptItem`, data);
  return res.data;
};

export const GetImportReceiptItem = async (receiptId) => {
  const res = await axios.get(
    `http://localhost:3001/ImportReceiptItem?receiptId=${receiptId}`,
  );
  return res.data;
};
export const ImportReceiptid = async (id) => {
  const getPucharse = await axios.get(
    `http://localhost:3001/ImportReceipt/${id}`,
  );
  return getPucharse.data;
};

export const ImportReceiptstatus = async () => {
  const listPuchase = await axios.get(`http://localhost:3001/ImportReceipt`);
  if (!listPuchase.data) {
    throw new Error("không có data");
  }
  return listPuchase.data;
};
export const Supplier = async () => {
  const listPuchase = await axios.get(`http://localhost:3001/Supplier`);
  if (!listPuchase.data) {
    throw new Error("không có data");
  }
  return listPuchase.data;
};
export const Item = async () => {
  const listitem = await axios.get(`http://localhost:3001/Item`);
  if (!listitem.data) {
    throw new Error("không có data");
  }
  return listitem.data;
};
export const ChangestatusHande = async (id, status) => {
  const getPucharse = await axios.patch(
    `http://localhost:3001/ImportReceipt/${id}`,
    { status },
  );
  return getPucharse.data;
};
