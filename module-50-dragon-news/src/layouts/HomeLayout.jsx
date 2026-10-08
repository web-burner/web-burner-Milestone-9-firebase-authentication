import { Outlet, useLoaderData, useNavigation } from "react-router";
import Header from "../Components/Header";
import HeadLine from "../Components/HeadLine";
import LeftAside from "../Components/LeftAside";
import Navbar from "../Components/Navbar";
import RightAside from "../Components/RightAside";

const HomeLayout = () => {
  const { state } = useNavigation();

  const data = useLoaderData();
  const categories = data;
  return (
    <div className=" w-11/12 mx-auto">
      <Header />
      
      <HeadLine />
      <Navbar />
      <main className=" grid grid-cols-12 gap-4">
        <aside className=" col-span-3 sticky top-0 h-fit">
          <LeftAside categories={categories} />
        </aside>
        <section className=" col-span-6 ">
          {state === "loading" ? (
            <p>Loading...</p>
          ) : (
            <>
              <h1 className=" text-lg font-bold">Dragon News Home</h1>
              <Outlet />
            </>
          )}
        </section>
        <aside className=" col-span-3 sticky top-0 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
