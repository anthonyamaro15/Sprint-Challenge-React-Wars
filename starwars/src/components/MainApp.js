import React, { useState, useEffect } from "react";
import ShowCard from "./ShowCard";
import axios from "axios";
import styled from "styled-components";

// const MainApp = () => {
//   const [data, setData] = useState([]);
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     axios
//       .get(`https://swapi.co/api/people/`)
//       .then(res => {
//         //   console.log(res.data);
//         setData(res.data);
//         setLoaded(true);
//       })
//       .catch(err => console.log(err));
//   }, []);
//   //   console.log(data.results);
//   return loaded ? (
//     <div>
//       {data.results.map(list => (
//         <ShowCard key={list.name} list={list} />
//       ))}
//     </div>
//   ) : (
//     <h1>loading...</h1>
//   );
// };

const MainApp = () => {
  return (
    <Wrapper>
      <ShowCard />
      <ShowCard />
      <ShowCard />
      <ShowCard />
      <ShowCard />
      <ShowCard />
      <ShowCard />
      <ShowCard />
    </Wrapper>
  );
};

export default MainApp;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid blue;
  padding: 0 1rem;
  margin-top: 5rem;
`;
