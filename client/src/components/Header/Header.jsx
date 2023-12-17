import { ManageAdmin } from "@/components/Icons";

const Header = props => {
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
    </div>
  );
};

export default Header;
