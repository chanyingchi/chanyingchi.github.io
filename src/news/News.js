import NEWS from "./data";

export default function News() {
  return NEWS.map((news) => (
    <div className="news" key={news.title}>
      <div className="news-left">
        <strong className="news-title">{news.title}</strong>
        <p className="news-text">{news.text}</p>
      </div>
      <img className="news-image" src={news.image} alt={news.title} />
    </div>
  ));
}
