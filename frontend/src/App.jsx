import Layout from "./Layout/Layout";
import { Login, Signup, Home, StartupGrid, CompanyForm } from "./pages";
import "./App.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/startups" element={<StartupGrid />} />
        <Route path="/add-new-startup" element={<CompanyForm />} />
        <Route path="*" element={<div> Page not found</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
