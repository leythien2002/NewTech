import { Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
//phai su dung BrowserRouter as de fix cai reading pathname( multiple import --> conflict)
import ProtectedLayout from "./layouts/ProtectedLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import "./index.css";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import DataTable from "./components/Table/TableComponent";
import UserList from "./pages/User/UserListPage";
import { AuthProvider } from "./context/AuthProvider";
import UpdateUserPage from "./pages/User/UpdateUserPage";
import CreateUserPage from "./pages/User/CreateUserPage";


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="" element={<ProtectedLayout />}>
          <Route path="/user" element={<UserList />} />
          <Route path="/user/create" element={<CreateUserPage />} />
          <Route path="/user/update/:id" element={<UpdateUserPage />} />
        </Route>
        <Route path="" element={<DefaultLayout />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
      </Routes>
    </AuthProvider>

  );
}

export default App;
