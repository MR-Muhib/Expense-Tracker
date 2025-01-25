import Logo from "@/public/tracker-logo.png";
import Image from "next/image";

const NavLogo = () => {
  return (
    <div className="mt-2">
      <Image className="h-12 w-12" src={Logo} alt="Tracker Logo" />
    </div>
  );
};

export default NavLogo;
