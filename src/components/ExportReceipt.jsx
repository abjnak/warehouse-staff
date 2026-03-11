import { Button, Form, Table } from "react-bootstrap";

function ExportReceipt({ data }) {
  return <div className="create-pr-form-wrapper">
      <Form className="create-pr-form" >
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
                
              />
            </Form.Group>
          </div>

          <div className="create-pr-form-row">
            <Form.Group className="create-pr-form-group">
              <Form.Label>create at:</Form.Label>
              <Form.Control type="date"  />
            </Form.Group>

            <Form.Group className="create-pr-form-group">
              <Form.Label>Supplier:</Form.Label>

              <Form.Select
                type="text"
                
               
                required
              >
                
                <option value="">Supplie:</option>
                
              </Form.Select>
            </Form.Group>

            <Form.Group className="create-pr-form-group">
              <Form.Label>Ghi chú</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập ghi chú (nếu có)"
                onChange={(e) => {
                 
                }}
              />
            </Form.Group>
          </div>
        </div>

        <div className="create-pr-section">
          <h3 className="create-pr-section-title">
            📦 Danh sách vật tư cần mua
          </h3>
         
           <div className="create-pr-actions">
          <Button
           
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
              
                  
                      
                      
              </tbody>
            </Table>

            <Button
            
              type="button"
              className="create-pr-add-item-btn"
              variant="outline"
            >
              + Thêm vật tư
            </Button>
          </div>
        </div>

       
      </Form>
    </div>;
}
export default ExportReceipt;
