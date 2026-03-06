import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import FogetForm from "../components/FogetForm";
import "../styles/Login.css";

export default function LoginFoget() {
  return (
    <div className="foget-page-wrapper">
      <Container className="foget-card">
        <Row>
          <Col md={6} className="foget-form-col">
            <h2 className="foget-title">Lấy lại mật khẩu</h2>
            <p className="foget-subtitle">
              Nhập <span className="foget-highlight">email</span> và{" "}
              <span className="foget-highlight">số định danh</span> để khôi phục
              mật khẩu hệ thống quản lý kho vật tư.
            </p>
            <FogetForm />
          </Col>
          <Col md={6} className="foget-side">
            <div>
              <p className="foget-side-title">Warehouse Staff System</p>
              <h3 className="foget-side-heading">
                An toàn dữ liệu kho,{" "}
                <span className="foget-highlight">bảo mật tài khoản</span>
              </h3>
              <p className="foget-side-text">
                Thông tin của bạn sẽ chỉ được sử dụng để xác minh tài khoản nội
                bộ. Vui lòng liên hệ quản trị viên kho nếu quên email hoặc số
                định danh.
              </p>
            </div>
            <div>
              <p className="foget-side-stat">
                • Quản lý phiếu nhập / xuất vật tư
                <br />
                • Theo dõi tồn kho theo từng vị trí
                <br />
                • Phân quyền chặt chẽ cho nhân viên kho
              </p>
              <div className="foget-badge">
                <span className="dot" />
                Tài khoản kho nội bộ
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
