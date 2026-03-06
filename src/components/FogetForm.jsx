import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function FogetForm() {
  return (
    <div >
      <Form className="foget-form mb-3">
        <Form.Group >
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Nhập email đã đăng ký"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Số định danh</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập số định danh / mã nhân viên"
          />
        </Form.Group>

        <Button type="submit" className="foget-submit-btn">
          Gửi yêu cầu đặt lại mật khẩu
        </Button>
      </Form>
      
      <Button as={Link} to="/" variant="info ">Trở lại</Button>
    </div>
  );
}

export default FogetForm;

