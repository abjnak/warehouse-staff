import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Loginform({ form, setform, handsumbit }) {
  return (
    <div className="login-form-wrapper">
      <div className="login-form-header">
        <h2 className="login-title">Đăng nhập hệ thống kho</h2>
        <p className="login-subtitle">
          Sử dụng tài khoản nội bộ để truy cập và quản lý{" "}
          <span className="login-highlight">phiếu nhập xuất</span>,{" "}
          <span className="login-highlight">tồn kho</span> và{" "}
          <span className="login-highlight">nhân viên kho</span>.
        </p>
      </div>
      <Form onSubmit={handsumbit}>
        <Form.Group className="mb-3">
          <Form.Label>username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập email công ty"
            value={form.username}
            onChange={(e) =>
              setform((prev) => ({
                ...prev,
                username: e.target.value,
              }))
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhập mật khẩu"
            value={form.password}
            onChange={(e) =>
              setform((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
          />
        </Form.Group>

        <Button type="submit" className="register-btn">
          Login
        </Button>
        <Link to="/foget-pass">
          <Button type="button">lấy lại mk</Button>
        </Link>
      </Form>
    </div>
  );
}
export default Loginform;
