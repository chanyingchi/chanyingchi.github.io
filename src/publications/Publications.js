import React, { useState } from "react";
import { MDBBtnGroup, MDBBtn } from "mdbreact";
import "./Publications.css";
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
  ) : (
    Name
  );

const YEARS = Array.from(new Set(PUBLICATIONS.map(({ year }) => year))).sort();
const CATEGORIES = Array.from(
  new Set(
    PUBLICATIONS.reduce((aggr, { categories }) => [...categories, ...aggr], [])
  )
);

const Filters = ({ selected, onSelect }) => {
  return (
    <>
      <MDBBtn disabled={!selected} onClick={() => onSelect()}>
        Clear filters
      </MDBBtn>
      <div className="btn-toolbar" role="toolbar" aria-label="Filters">
        <MDBBtnGroup className="mr-2">
          {YEARS.map((year) => (
            <MDBBtn
              key={year}
              disabled={selected === year}
              onClick={() => onSelect(year)}
            >
              {year}
            </MDBBtn>
          ))}
        </MDBBtnGroup>
      </div>
      <div className="btn-toolbar" role="toolbar" aria-label="Filters">
        <MDBBtnGroup className="mr-2">
          {CATEGORIES.map((category) => (
            <MDBBtn
              key={category}
              disabled={selected === category}
              onClick={() => onSelect(category)}
            >
              {category}
            </MDBBtn>
          ))}
        </MDBBtnGroup>
      </div>
    </>
  );
};

export default function Publications() {
  const [filter, setFilter] = useState();
  return (
    <>
      <div className="App-section-left">
        <h1>Publications</h1>
        <Filters selected={filter} onSelect={setFilter} />
      </div>
      <div className="App-section-right">
        {PUBLICATIONS.filter(
          ({ categories, year }) =>
            !filter || year === filter || categories.includes(filter)
        ).map((publication) => (
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
            <span className="publication-journal-issue">{`${publication.journalIssue}.`}</span>
            {!!publication.doi && (
              <>
                <span className="publication-doi"> doi: </span>
                <a href={`https://doi.org/${publication.doi}`}>
                  {publication.doi}
                </a>
              </>
            )}
            {!!publication.url && (
              <a className="publication-url" href={publication.url}>
                PDF
              </a>
            )}
          </p>
        ))}
      </div>
    </>
  );
}
