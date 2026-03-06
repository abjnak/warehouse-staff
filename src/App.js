import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage";
import LoginFoget from "./pages/LoginFoget";
import PurchaseRequestPage from "./pages/PurchaseRequestPage";
import CreatePurchaseRequestForm from "./pages/CreatePurchaseRequestForm";
import GetPuchasebyid from "./pages/DetailsPurchasepage";
import MainLayout from "./layouts/MainLayout";
import "./App.css";
import Dashboar from "./pages/DashboardPages";
import Inventory from "./pages/InventoryPages";
import SystemSetting from "./pages/SystemSettingPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<MainLayout/>}>
          <Route path="/foget-pass" element={<LoginFoget />} />
          <Route path="/PurchaseRequest" element={<PurchaseRequestPage />} />
          <Route
            path="/CreatePuchase"
            element={<CreatePurchaseRequestForm />}
          />
          <Route path="/DetailsPurchase/:id" element={<GetPuchasebyid />} />
          <Route path="/dashboard" element={<Dashboar/>}/>
          <Route path="/inventory" element={<Inventory/>}/>
          <Route path="/settings" element={<SystemSetting/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
