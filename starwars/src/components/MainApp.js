import React, { useState, useEffect } from "react";
import ShowCard from "./ShowCard";
import axios from "axios";
import styled from "styled-components";

const MainApp = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${page}`)
      .then(res => {
        console.log(res.data);
        setData(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
    console.log(page);
  };
  const previousPage = () => {
    setPage(page - 1);
  };

  return loaded ? (
    <div>
      <PageCount>page: {page}</PageCount>

      <Btn>
        <Button onClick={previousPage} disabled={page === 1}>
          previous
        </Button>
        <Button onClick={nextPage}>next</Button>
      </Btn>
      <Wrapper>
        {data.results.map(list => (
          <ShowCard key={list.name} list={list} />
        ))}
      </Wrapper>
    </div>
  ) : (
    <h1>loading...</h1>
  );
};

export default MainApp;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 1rem;
  margin-top: 5rem;
  font-size: 1.2rem;
`;

const Btn = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem 2rem 0;
`;

const Button = styled.button`
  display: inline-block;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 0 0.5rem;
  background: #222;
  color: #f4f4f4;
  cursor: pointer;
`;

const PageCount = styled.span`
  display: block;
  margin-left: 1rem;
  font-size: 1.2rem;
`;
