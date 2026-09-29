import { useNavigate } from "react-router";

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className=" h-dvh flex flex-col gap-5 justify-center items-center">
            <h1 className=" text-4xl font-bold">Error 404 . Page not found</h1>
            <button className=" btn bg-violet-800 text-white w-40" onClick={()=> navigate(-1)}>Go Back</button>
        </div>
    );
};

export default ErrorPage;