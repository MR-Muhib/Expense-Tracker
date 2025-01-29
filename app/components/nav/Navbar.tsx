import Export from "./navbar/Export";
import NavLogo from "./navbar/NavLogo";

const Navbar = () => {
  return (
    <div className="w-full h-14  bg-gray-light shadow-sm border-b z-20 sticky top-0">
      <div className="container mx-auto flex flex-wrap  items-center my-auto px-4 justify-between">
        <NavLogo />

        <Export />
      </div>
    </div>
  );
};

export default Navbar;
