import QZone from "./QZone";
import SocialLogin from "./SocialLogin";
import SocialMedia from "./SocialMedia";

const RightAside = () => {
  return (
    <div>
      <h1 className=" text-lg font-bold">Login With</h1>
      <SocialLogin />
      <div className=" mt-5">
        <h2 className=" text-lg font-bold">Social Media</h2>
        <SocialMedia />
      </div>
      <QZone/>
    </div>
  );
};

export default RightAside;
