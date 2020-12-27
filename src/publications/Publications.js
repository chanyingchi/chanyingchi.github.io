import React, { useState } from "react";
import { MDBBtn } from "mdbreact";
import "./Publications.css";
import PUBLICATIONS, { ME, CATEGORIES } from "./data";

const Author = ({ name }) =>
  name === ME ? (
    <strong className="publication-author">{name}</strong>
  ) : (
    <span className="publication-author">{name}</span>
  );

const Title = ({ Name }) => (
  <strong className="publication-title">{Name}</strong>
);

const YEARS = Array.from(new Set(PUBLICATIONS.map(({ year }) => year))).sort();

const Group = ({ color, children }) => (
  <div className="btn-toolbar" role="toolbar" aria-label="Filters">
    <div className={`filter-group filter-${color}`}>{children}</div>
  </div>
);

const Filters = ({ selected, onSelect }) => {
  const Button = ({ category, label }) => (
    <MDBBtn
      key={category}
      className="filter-button"
      disabled={selected === category}
      onClick={() => onSelect(category)}
    >
      {label || category}
    </MDBBtn>
  );
  return (
    <>
      <Group color="grey">
        <Button label="Clear filters" />
      </Group>
      <Group color="red">
        {YEARS.map((year) => (
          <Button category={year} />
        ))}
      </Group>
      {Object.keys(CATEGORIES).map((key) => (
        <Group
          key={key}
          color={
            key === "SPECIES" ? "orange" : key === "PLACE" ? "blue" : undefined
          }
        >
          {CATEGORIES[key].map((category) => (
            <Button category={category} />
          ))}
        </Group>
      ))}
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
          <p className="publication" key={publication.title}>
            <Title Name={publication.title} />
            <br />
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
            <span className="publication-year">{`(${publication.year}).`}</span>
            <br />
            <strong className="publication-journal">{`${publication.journal} `}</strong>
            <span className="publication-journal-issue">{`${publication.journalIssue}.`}</span>
            {!!publication.doi && (
              <>
                <span className="publication-doi"> doi: </span>
                <a
                  href={`https://doi.org/${publication.doi}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {publication.doi}
                </a>
              </>
            )}
            {!!publication.url && (
              <a
                className="publication-url"
                href={publication.url}
                target="_blank"
                rel="noreferrer"
              >
                PDF
              </a>
            )}
          </p>
        ))}
      </div>
    </>
  );
}
