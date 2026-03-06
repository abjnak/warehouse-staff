import { Outlet } from "react-router-dom";
import SidebarLayout from "./SidebarLayout";

export default function MainLayout() {
  return (
    <div style={{ display: "flex" }}>
      <SidebarLayout />
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}