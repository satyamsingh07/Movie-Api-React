import React, { useContext, useEffect,useState } from "react";
import styled from "styled-components";
import searchContext from "../../context/searchContext";

const Container = styled.div`
  display: flex;
  width: 100vw;
  background-color: #fff;
  justify-content: space-around;
  padding-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    min-height: 50px;
  }
`;

const Input = styled.input`
  width: 15rem;
  ::placeholder {
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

const Img = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`;

function TopBar() {
  const { search, setSearch } = useContext(searchContext);
 // const [text,setText] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);

    console.log(e.target.value);
    console.log(search);
  };




  return (
    <Container>
      <Img src={"images/Logo.svg"} alt="hello" />
      <br />
      <Input
        type="search"
        placeholder="search for a movie"
        onChange={handleChange}
      />
    </Container>
  );
}

export default TopBar;
