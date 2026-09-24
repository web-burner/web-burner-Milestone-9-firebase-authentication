import BannerApp from "./BannerApp";

const Banner = ({ bannerContent }) => {
  return (
    <div className=" h-100 flex">
      {bannerContent.map((app) => (
        <BannerApp key={app.id} app={app} />
      ))}
    </div>
  );
};

export default Banner;
