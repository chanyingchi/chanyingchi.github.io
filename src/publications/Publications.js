import React, { useCallback, useState } from "react";
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

const Button = ({ selected, disabled, label, onClick }) => (
  <MDBBtn
    className={
      selected ? "filter-button filter-button-active" : "filter-button"
    }
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </MDBBtn>
);

const BtnGroup = ({
  color,
  name,
  values,
  onSelectedChange,
  selectedValues = [],
}) => (
  <Group color={color}>
    {values.map((value) => {
      const selected = selectedValues.includes(value);
      return (
        <Button
          key={value}
          label={value}
          selected={selected}
          onClick={() =>
            onSelectedChange(
              name,
              selected
                ? selectedValues.filter((x) => x !== value)
                : [...selectedValues, value]
            )
          }
        />
      );
    })}
  </Group>
);

const Filters = ({ selected, onSelect }) => {
  const onSelectedChange = useCallback(
    (name, values) => onSelect({ ...selected, [name]: values }),
    [selected, onSelect]
  );
  return (
    <>
      <Group color="grey">
        <Button
          label="Clear filters"
          disabled={Object.keys(selected).every(
            (category) => !selected[category]?.length
          )}
          onClick={() => onSelect({})}
        />
      </Group>
      <BtnGroup
        color="red"
        name="year"
        values={YEARS}
        selectedValues={selected.year}
        onSelectedChange={onSelectedChange}
      />
      {Object.keys(CATEGORIES).map((category) => (
        <BtnGroup
          key={category}
          name={category}
          values={CATEGORIES[category]}
          selectedValues={selected[category]}
          onSelectedChange={onSelectedChange}
          color={
            category === "SPECIES"
              ? "orange"
              : category === "PLACE"
              ? "blue"
              : "green"
          }
        />
      ))}
    </>
  );
};

const Publication = ({ publication }) => (
  <p className="publication">
    <Title Name={publication.title} />
    <br />
    {publication.authors.map((author, index) => (
      <React.Fragment key={author}>
        <Author name={author} />
        {index < publication.authors.length - 1 ? (
          <span>, </span>
        ) : (
          <span> </span>
        )}
      </React.Fragment>
    ))}
    <span className="publication-year">{`(${publication.year}).`}</span>
    <br />
    <strong className="publication-journal">{publication.journal}</strong>
    <span className="publication-journal-issue">
      {publication.journalIssue ? ` ${publication.journalIssue}.` : "."}
    </span>
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
);

export default function Publications() {
  const [filter, setFilter] = useState(
    Object.keys(CATEGORIES).reduce((aggr, key) => ({ ...aggr, [key]: [] }), {
      year: [],
    })
  );

  const filtered = PUBLICATIONS.filter(({ categories, year }) =>
    Object.keys(filter).every((group) => {
      return (
        !filter[group].length ||
        filter[group].some((category) =>
          group === "year" ? category === year : categories.includes(category)
        )
      );
    })
  );

  return (
    <>
      <div className="App-section-left">
        <h1>Publications</h1>
        <Filters selected={filter} onSelect={setFilter} />
      </div>
      <div className="App-section-right">
        {filtered.map((publication) => (
          <Publication
            publication={publication}
            key={publication.doi || publication.url}
          />
        ))}
        {!filtered.length && (
          <span>{"No publication matches this filter criteria."}</span>
        )}
      </div>
    </>
  );
}
