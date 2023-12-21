import Layout from "./Layout/Layout";
import { Login, Signup, Home, StartupGrid, CompanyForm } from "./pages";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LoggedInProtected, NotLoggedInProtected } from "./ProtectedRoutes";
import { useUser } from "./Context/AuthContext";
function App() {
  const { isLoggedIn } = useUser();
  return (
    <Layout>
      <Routes>
        <Route path="/startups" element={<StartupGrid />} />
        <Route element={<LoggedInProtected isLoggedIn={isLoggedIn} />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<NotLoggedInProtected isLoggedIn={isLoggedIn} />}>
          <Route path="/add-new-startup" element={<CompanyForm />} />
        </Route>
        <Route path="*" element={<div> Page not found</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
