import { format } from "date-fns";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className=" flex flex-col justify-center items-center pt-5">
      <img src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "	EEEE, MMMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;
