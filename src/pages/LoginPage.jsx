import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import Loginform from "../components/LoginForm";
import { loginService } from "../services/authService";
import { useState } from "react";
import "../styles/Login.css";

function Login() {
  const [form, setform] = useState({
   usename:"",
   password:""
  });
 

  const navigate = useNavigate();

  const handsumbit = async (e) => {
    e.preventDefault();
    try {
     const users = await loginService(form);
      localStorage.setItem("user",JSON.stringify(users));
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
      return;
    }
  };

  return (
    <div className="login-page">
      <Container className="login-card">
        <Row>
          <Col md={5} className="login-form">
            <Loginform
              form={form}
              setform={setform}
              handsumbit={handsumbit}
            />
          </Col>
          <Col md={7} className="login-side">
            <div>
              <p className="login-side-title">Warehouse Staff System</p>
              <h3 className="login-side-heading">
                Trung tâm quản lý{" "}
                <span className="login-highlight">kho vật tư</span>
              </h3>
              <p className="login-side-text">
                Đăng nhập để theo dõi tồn kho, kiểm soát phiếu nhập xuất và đảm
                bảo dòng vật tư luôn được ghi nhận chính xác, minh bạch.
              </p>
            </div>
            <div>
              <p className="login-side-stat">
                • Tồn kho theo từng vị trí, từng lô
                <br />
                • Lịch sử nhập xuất chi tiết theo ca
                <br />
                • Phân quyền cho tổ trưởng, thủ kho, nhân viên
              </p>
              <div className="login-badge">
                <span className="dot" />
                Tài khoản nội bộ kho
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Login;
