import NEWS from "./data";
import "./News.css";

export default function News() {
  return NEWS.map((news) => (
    <a key={news.title} href={news.url} target="_blank" rel="noreferrer">
      <div className="App-paragraph news">
        <img className="news-image" src={news.image} alt={news.title} />
        <h4 className="news-title">{news.title}</h4>
        <p className="news-text">{news.text}</p>
      </div>
    </a>
  ));
}
