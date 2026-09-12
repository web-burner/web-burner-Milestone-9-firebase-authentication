import { NavLink } from "react-router";

const LeftAside = ({categories}) => {
    return (
        <div className="grid-cols-1">
            <h1 className=" text-lg font-bold mb-4">All Categories</h1>
            <div className=" categories flex flex-col gap-2">
                {
                    categories.map(category => <NavLink to={`/category/${category.id}`} className=" btn bg-transparent shadow-none border-gray-300 hover:bg-base-200" key={category.id}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftAside;