import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import "../styles/SidebarLayout.css";
import { Button } from "react-bootstrap";

export default function SidebarLayout() {
  return (
    <div className="layout-shell">
      <aside className="layout-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">WS</div>
          <div>
            <p className="sidebar-title">Warehouse Staff</p>
            <p className="sidebar-subtitle">Kho vật tư nội bộ</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <p className="sidebar-section-label">TỔNG QUAN</p>
          <NavLink to="/dashboard" className="sidebar-link">
            <span className="sidebar-dot" />
            Dashboard
          </NavLink>

          <p className="sidebar-section-label">OPERATIONS</p>
          <NavLink to="/purchase-requests" className="sidebar-link">
            <span className="sidebar-dot" />
            Purchase Request
          </NavLink>
          <NavLink to="/inventory" className="sidebar-link">
            <span className="sidebar-dot" />
            Inventory
          </NavLink>
          <NavLink to="/PurchaseRequest" className="sidebar-link">
            <span className="sidebar-dot" />
            Stock Transactions
          </NavLink>

          <p className="sidebar-section-label">SYSTEM</p>
          <NavLink to="/staff" className="sidebar-link">
            <span className="sidebar-dot" />
            Warehouse Staff
          </NavLink>
          <NavLink to="/settings" className="sidebar-link">
            <span className="sidebar-dot" />
            System Settings
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="sidebar-avatar">NV</div>
            <div>
              <p className="sidebar-user-name">Nhân viên kho</p>
              <p className="sidebar-user-role">Warehouse Staff</p>
            </div>
          </div>
          <div className="mt-3">
            <Button as={Link} to="/">Đăng xuất </Button>
          </div>
        </div>
      </aside>
    </div>
  );
}

