import News from "./News";

const NewsContainer = ({newses}) => {
    return (
        <div>
            {
                newses.map(news => <News key={news.id} news={news}/>)
            }
        </div>
    );
};

export default NewsContainer;