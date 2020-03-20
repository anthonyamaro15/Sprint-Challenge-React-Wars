import React from "react";
import styled from "styled-components";

const ShowCard = ({ list }) => {
  //   const {
  //     name,
  //     height,
  //     mass,
  //     hair_color,
  //     birth_year,
  //     gender,
  //     films,
  //     species,
  //     vehicles,
  //     starsships,
  //     url
  //   } = list;
  //   console.log(list);

  return (
    <Card>
      <p>name</p>
      <p>height</p>
      <p>mass</p>
      <p>hair_color</p>
      <p>birth_year</p>
      <p>gender</p>
    </Card>
  );
};

export default ShowCard;

const Card = styled.div`
  border: 1px solid red;
  width: 350px;
  padding: 2rem;
  margin-bottom: 1rem;
  background: rgba(10, 10, 10, 0.5);
  color: #f4f4f4;
  text-transform: capitalize;
  border-radius: 10px;
  transition: background 0.5s ease;

  &:hover {
    background: rgba(10, 10, 10, 0.7);
  }
`;
