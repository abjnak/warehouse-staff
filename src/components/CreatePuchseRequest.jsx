import { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import { CreatePuchases } from "../services/PurchaseRequest";
import { Link, useNavigate } from "react-router-dom";

function CreatePuchase({
  handCreate,
  deletes,
  addItems,
  userss,
  items,
  setnot,
  setitems,
  date,
  supplie,
  item,
  supplieid,
  setsupplieid,
 
}) {
  return (
    <div className="create-pr-form-wrapper">
      <Form className="create-pr-form" onSubmit={handCreate}>
        <div className="create-pr-section">
          <h3 className="create-pr-section-title">
            📋 Thông tin chung của phiếu
          </h3>
          <p className="create-pr-section-desc">Những thứ mô tả yêu cầu mua</p>

          <div className="create-pr-form-row">
            <Form.Group className="create-pr-form-group">
              <Form.Label>Create By:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên người yêu cầu"
                value={userss?.username}
              />
            </Form.Group>
          </div>

          <div className="create-pr-form-row">
            <Form.Group className="create-pr-form-group">
              <Form.Label>create at:</Form.Label>
              <Form.Control type="date" value={date} />
            </Form.Group>

            <Form.Group className="create-pr-form-group">
              <Form.Label>Supplier:</Form.Label>

              <Form.Select
                type="text"
                value={supplieid}
                onChange={(e) => setsupplieid(e.target.value)}
              >
                
                <option value="">Supplie:</option>
                {supplie?.map((sup) => {
                  return (
                    <option key={sup.id} value={sup.id}>
                      {sup.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group className="create-pr-form-group">
              <Form.Label>Ghi chú</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập ghi chú (nếu có)"
                onChange={(e) => {
                  setnot(e.target.value);
                }}
              />
            </Form.Group>
          </div>
        </div>

        <div className="create-pr-section">
          <h3 className="create-pr-section-title">
            📦 Danh sách vật tư cần mua
          </h3>
          <p className="create-pr-section-desc">
            Đây mới là phần bạn đang nghĩ tới
          </p>

          <div className="create-pr-table-wrapper">
            <Table
              striped
              bordered
              hover
              responsive
              className="create-pr-table"
            >
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name material</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {items?.map((ite, index) => {
                  return (
                    <tr key={ite?.id}>
                      <td>{index + 1}</td>
                      <td>
                        <Form.Select
                          value={ite?.itemid}
                          onChange={(e) => {
                            const newite = [...items];
                            newite[index].itemid = e.target.value;
                            setitems(newite);
                          }}
                        >
                          <option value="" disabled>-- Chọn vật tư --</option>
                          {item?.map((nameitem) => {
                            return (
                              <option key={nameitem.id} value={nameitem.id}>
                                {nameitem.name}
                              </option>
                            );
                          })}
                        </Form.Select>
                      </td>
                      <td>
                        <input
                          placeholder="Enter quantity"
                          value={ite?.quantity}
                          onChange={(e) => {
                            const newite = [...items];
                            newite[index].quantity = e.target.value;
                            setitems(newite);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          placeholder="Enter price"
                          value={ite?.unitPrice}
                          onChange={(e) => {
                            const newite = [...items];
                            newite[index].unitPrice = e.target.value;
                            setitems(newite);
                          }}
                        />
                      </td>
                      <td>
                        <Button onClick={() => deletes(ite.id)}>xoa</Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            <Button
              onClick={(e) => addItems()}
              type="button"
              className="create-pr-add-item-btn"
              variant="outline"
            >
              + Thêm vật tư
            </Button>
          </div>
        </div>

        <div className="create-pr-actions">
          <Button
            as={Link}
            to="/PurchaseRequest"
            type="button"
            className="create-pr-cancel-btn"
          >
            Hủy
          </Button>
          <Button type="submit" className="create-pr-submit-btn">
            Tạo đơn yêu cầu
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreatePuchase;
