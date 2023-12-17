import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import { JobAdmin, StatisticsAdmin, UserAdmin } from "@/components/Icons";
import SidebarItem from "./SidebarItem";

function Sidebar(props) {
  return (
    <div
      className={twMerge(
        " w-[300px] h-[100vh] font-family-text text-white bg-primary-100 rounded-r-[10px] mr-[30px] duration-300 left-0 fixed overflow-hidden",
        `${props.isActiveSidebar ? "" : "w-[80px]"}`
      )}
    >
      <div className="pl-4">
        <div className="min-h-[50px] flex items-center justify-center">
          <FontAwesomeIcon icon={faHouse} />
        </div>
        <SidebarItem
          to="route1"
          icon={<StatisticsAdmin />}
          title="Test1"
          isActiveSidebar={props.isActiveSidebar}
        />
        <SidebarItem
          to="route2"
          icon={<UserAdmin />}
          title="Test2"
          isActiveSidebar={props.isActiveSidebar}
        />
        <SidebarItem
          to="route3"
          icon={<JobAdmin />}
          title="Test3"
          isActiveSidebar={props.isActiveSidebar}
          childrenItem={[
            {
              to: 'label',
              title: 'title1'
            },
            {
              to: 'label',
              title: 'title1'
            }
          ]}
        />
        <SidebarItem
          to="/auth/login"
          icon={<JobAdmin />}
          title="Trang đăng nhập"
          isActiveSidebar={props.isActiveSidebar}
        />
      </div>
    </div>
  );
}

export default Sidebar;
