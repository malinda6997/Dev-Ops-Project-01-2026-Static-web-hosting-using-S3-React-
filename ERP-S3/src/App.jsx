import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"; //this this error
import Overview from "./pages/Overview";
import Inventory from "./pages/Inventory";
import Analytics from "./pages/Analytics";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";
import SupplyChain from "./pages/SupplyChain";
import HR from "./pages/HR";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-4 ml-0 transition-all duration-300 md:p-8 md:ml-64">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/supply-chain" element={<SupplyChain />} />
            <Route path="/hr" element={<HR />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
