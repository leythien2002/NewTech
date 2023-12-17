import { Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
//phai su dung BrowserRouter as de fix cai reading pathname( multiple import --> conflict)
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import "./index.css";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import DataTable from "./components/Table/Table1";
import UserList from "./pages/User/UserList";


function App() {
  return (
    <Routes>
      <Route path="" element={<DefaultLayout />}>
        <Route path="route1" element={<UserList />} />
        <Route path="route2" element={<div>route2</div>} />
        <Route path="route3" element={<div>route3</div>} />
      </Route>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
    </Routes>
  );
}

export default App;
