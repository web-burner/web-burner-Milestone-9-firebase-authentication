const HeadLine = () => {
  return (
    <div className=" flex justify-center items-center gap-5 w-11/12 mx-auto p-5 bg-gray-300 rounded-xl">
      <button className=" bg-primary py-2 px-5 ">Latest</button>
      <marquee behavior="" direction="">
        <p className="text-lg ">Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain — as it happened !</p>
      </marquee>
    </div>
  );
};

export default HeadLine;
