
const Register = () => {
    const handleRegister = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
    }
    return (
        <div className=" border rounded-xl p-4 w-4/12 mx-auto flex justify-center items-center text-center flex-row-reverse gap-3">
            <h2 className=" font-bold text-4xl">Register Now</h2>
            <form onSubmit={handleRegister} className=" bg-base-300 p-5 rounded-xl">
                <input className=" border border-gray-400 rounded-xl p-2 mb-2" type="email" name="email" placeholder="Enter Email"/>
                <br />
                <input className=" border border-gray-400 rounded-xl p-2 mb-2" type="password" name="password" placeholder="Enter Password"/>
                <br />
                <input className=" w-full border border-gray-400 rounded-xl p-2" type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;