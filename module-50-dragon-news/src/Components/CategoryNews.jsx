// import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsContainer from "./NewsContainer";
import { useEffect, useState } from "react";

const CategoryNews = () => {
  const { categoryId } = useParams();
  const id = parseInt(categoryId);
  const newsData = useLoaderData();
  const [newses, setNewses] = useState([]);

  useEffect(() => {
    const filteredNews = newsData.filter((news) => news.category_id === id);

    if (id === 0) {
      setNewses(newsData);
    } else if (id === 1) {
      const brackingNews = newsData.filter(
        (news) => news.others.is_today_pick === true,
      );
      setNewses(brackingNews);
    }else{
    setNewses(filteredNews);
    }
  }, [id , newsData]);
  return (
    <div>
      <div>
        <NewsContainer newses={newses} />
      </div>
    </div>
  );
};

export default CategoryNews;
