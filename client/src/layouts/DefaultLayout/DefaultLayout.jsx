import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

import { useState } from "react";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  const [activeSidebar, setActiveSidebar] = useState(true);

  return (
    <div className="flex bg-[#EEE]">
      <Sidebar isActiveSidebar={activeSidebar} />
      <div
        className={
          " w-full min-h-screen flex flex-col duration-300 pr-[30px] " +
          (activeSidebar ? "pl-[330px]" : "pl-[90px]")
        }
      >
        <Header setActiveSidebar={setActiveSidebar} />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
