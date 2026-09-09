import logo from '../assets/logo.png';
const Header = () => {
    return (
        <div className=' flex flex-col justify-center items-center'>
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>Date and time</p>
        </div>
    );
};

export default Header;