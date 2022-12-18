import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: 1rem 1rem 0 0;
  height: 20rem;
  background-color: #000;
  background-size: 120%;
  background-position: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const CardContainer = styled.div`
  background-color: #fff;
  width: 20rem;
  height: 25rem;
  margin: 5rem auto;
  border-radius: 1rem;
  box-shadow: 0 0 5rem rgba(0, 0, 0, 0.3);
  transition: 0.4s;
  &:hover {
    background-color: #ffd86b;
    transform: translateY(-50px) rotate(-5deg);
    box-shadow: 0 0 5rem rgba(0, 0, 0, 0.5);
    z-index: -100;
  }
`;

// const Modal = styled.div`
//   position: absolute;
//   width: 75vw;
//   height: 75vh;
//   background-color: green;
// `;

function Card(props) {
  return (
    <div>
      <CardContainer>
        <Wrapper
          style={{
            backgroundImage: `url(${props.uri})`,
          }}
        />
        <Title>
          <h4 style={{ margin: 5 }}>{props.heading}</h4>
        </Title>
      </CardContainer>
    </div>
  );
}

export default Card;
