import PUBLICATIONS, { ME } from "./data";

const Author = ({ name }) =>
  name === ME ? (
    <strong className="publication-author">{name}</strong>
  ) : (
    <span className="publication-author">{name}</span>
  );

const Title = ({ Name }) =>
  typeof Name === "string" ? (
    <span className="publication-title">{Name}</span>
  ) : Name;

export default function Publications() {
  return PUBLICATIONS.map((publication) => {
    const format = publication.url.split(".").reverse()[0];
    return (
      <p key={publication.title}>
        {publication.authors.map((author, index) => (
          <>
            <Author key={author} name={author} />
            {index < publication.authors.length - 1 ? (
              <span key={`${author}_separator`}>, </span>
            ) : (
              <span key={`${author}_separator`}> </span>
            )}
          </>
        ))}
        <span className="publication-year">{`(${publication.year}). `}</span>
        <Title Name={publication.title} />
        <span className="publication-title-separator">. </span>
        <span className="publication-journal">{`${publication.journal} `}</span>
        <span className="publication-journal-issue">{`${publication.journalIssue}. `}</span>
        <span className="publication-doi">doi: </span>
        <a href={`https://doi.org/${publication.doi}`}>{publication.doi}</a>
        <span className="publication-url"> [</span>
        <a href={publication.url}>{format.toUpperCase()}</a>
        <span className="publication-url">]</span>
      </p>
    );
  });
}
