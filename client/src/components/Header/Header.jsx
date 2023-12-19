import { ManageAdmin } from "@/components/Icons";
import { useAuth } from "../../context/AuthProvider";
const Header = (props) => {
  const { user } = useAuth();
  console.log('user in header', user)
  const onActiveSidebar = () => {
    props.setActiveSidebar(prev => !prev);
  };

  return (
    <div className=" w-[100%] flex items-center justify-between font-family-text text-content-title mb-[30px] py-5">
      <div className=" flex items-center gap-[30px]">
        <div className="flex cursor-pointer" onClick={onActiveSidebar}>
          <ManageAdmin />
        </div>
      </div>
      <div className=" flex items-center gap-[30px]">
        <img className=" w-10 h-10 rounded-full" src="o day la hinh" />
        <div className=" flex flex-col">
          <h3 className=" font-family-title font-semibold">{user && user.username}</h3>
          <p>de role o day</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
